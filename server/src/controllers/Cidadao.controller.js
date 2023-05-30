const { ObjectId, MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');
const url = process.env.DB;
var jwt = require('jsonwebtoken');
const keyServerConn = require('../models/keyServerConn');
const { SHA256, AES } = require('crypto-js');

class CidadaoController {
    static async newCidadao(req, res) {
        var notify = {
            popup:false,
            push: false
        }
        const client = new MongoClient(url);
        const data = req.body;

        if(data.notificacao){
            notify.popup = true;
            notify.push = true;
        }

        data.notificacao = notify

        try {
            var key = {};
            var cryptData = ''
            var keyId = SHA256(data.cpf + process.env.HASH_SALT).toString();

            await keyServerConn.post('saveKey', { id: keyId })
            .then(result => {
                key = result.data
                cryptData = AES.encrypt(JSON.stringify(data), key.chave).toString()
            });

            const opdb = client.db('opdb');

            opdb.collection('cidadao').find({ id_chave: key?.id }).toArray((err, value) => {
                if(err) throw err;
                data.termos[0].id = new ObjectId(data.termos[0].id)
                try {
                    if(!value.length) {
                        opdb.collection('cidadao')
                        .insertOne({ 
                            data: cryptData,
                            id_chave: key?.id
                        })
                        .then(async result => {
                            res.json(!!result)
                        });
                    }
                    else throw 'Usuário já cadastrado'
                }
                catch(e) {
                    console.error(e);
                    res.status(400).json({ error: e });
                }
            })
        }
        catch(e) {
            console.error(e);
            res.status(400).json({ error: e });
        }
        finally {
            client.close();
        }
    }

    static async validar(req, res) {
        const client = new MongoClient(url);
        const data = req.body;

        try {
            const opdb = client.db('opdb');
            await opdb.collection('cidadao').findOne({
                cpf: data?.cpf
            })
            .then(result => res.json(!result));
        }
        catch(e) {
            console.error(e);
            res.status(400).json({ error: e });
        }
    }

    static async login(req, res) {
        const client = new MongoClient(url);
        const data = req.body;

        try {
            const opdb = client.db('opdb');
            await opdb.collection('cidadao').findOne({
                cpf: data.cpf,
                senha: data.senha 
            })
            .then(result => {
                if(!!result) {
                    const bucket = new GridFSBucket(opdb, { bucketName: 'imagemPerfil' });

                    const finish = () => {
                        client.close();
                        let tokenData = {
                            nome: result.nome,
                            email: result.email
                        }
                        let generatedToken = jwt.sign(tokenData, process.env.JWT_SAUCE, {
                            expiresIn: '3d',
                        })
                        res.json({token: generatedToken, result});
                    }

                    bucket.openDownloadStreamByName(result._id.toString())
                    .once('error', err => {
                        err?.code === 'ENOENT' && console.error(err)
                        finish();
                        //client.close();
                        //res.json(result);
                    })
                    .once('data', data => {
                        result.imagem = data.toString();
                    })
                    .once('end', () => {
                        finish();
                    });
                }
                else {
                    console.error(result);
                    throw 'CPF ou Senha inválidos'
                }
            });
            
        }
        catch(e) {
            console.error(e);
            res.status(400).json({ error: e });
        }
    }

    static async getCidadao(req, res) {
        const client = new MongoClient(url);
        const data = req.body;

        try {
            const opdb = client.db('opdb');
            const result = await opdb.collection('cidadao').findOne({
                _id: new ObjectId(data.id)
            });

            if(!!result) {
                res.json(result);
            }
            else {
                throw 'Cidadão não encontrado'
            }
        }
        catch(e) {
            console.error(e);
            res.status(400).json({ error: e });
        }
        finally {
            client.close();
        }
    }

    static async updateCidadao(req, res) {
        const client = new MongoClient(url);
        const data = req.body;
        if(data.imagem === 'false'){
            data.imagem = JSON.parse(data.imagem)
        }
        if(typeof data.notificacao === 'string'){
            data.notificacao = JSON.parse(data.notificacao)
        }

        data.termos = JSON.parse(JSON.stringify(data.termos))

        const _id = data.id
        const image_aux = data.imagem
        delete data.id
        delete data.imagem

        try {

            var cryptData = ''

            const oldKey = await keyServerConn.post('findKey', { id: data.id_chave })
            .then(result => result.data);

            const key = await keyServerConn.put('updateKey',  {
                oldId: oldKey.id,
                newId: SHA256(data.cpf + process.env.HASH_SALT).toString()
            })
            .then(result => {
                const key = result.data
                delete data.id_chave
                
                cryptData = AES.encrypt(JSON.stringify(data), key.chave).toString()
                return key
            });

            const opdb = client.db('opdb');
            const result = await opdb.collection('cidadao').updateOne(
                { _id: new ObjectId(_id) },
                { $set: {
                    data: cryptData,
                    id_chave: key.id
                } }
            );

            if(image_aux) {
                const temp_path = __dirname + '/temp.txt';
                const bucket = new GridFSBucket(opdb, { bucketName: 'imagemPerfil' });

                const clear = bucket.find({ filename: _id })
                clear.forEach(doc => bucket.delete(doc._id))

                if(image_aux !== 'null') {
                    fs.writeFileSync(temp_path, Buffer.from(image_aux))
                    fs.createReadStream(temp_path)
                    .pipe(bucket.openUploadStream(_id, {
                        chunkSizeBytes: 1048576
                    }))
                    .once('close', () => {
                        fs.unlinkSync(temp_path);
                        client.close();
                        res.json({ modifiedCount: true });
                    })
                    .once('error', err => {
                        if(err) throw err;
                    });
                }
                else {
                    //client.close();
                    res.json({ modifiedCount: true });
                }
            }
            else {
                client.close();
                res.json({ modifiedCount: !!result.modifiedCount });
            };
        }
        catch(e) {
            console.error(e);
            res.status(400).json({ error: e });
        }
    }

    static async deleteCidadao(req, res) {
        const client = new MongoClient(url);
        const { id } = req.body;

        try {
            const opdb = client.db('opdb');
            const result = await opdb.collection('cidadao').deleteOne({
                _id: new ObjectId(id)
            });

            res.json({ deletedCount: result.deletedCount });
        }
        catch(e) {
            console.error(e);
            res.status(400).json({ error: e });
        }
        finally {
            client.close();
        }
    }
}
module.exports = CidadaoController;