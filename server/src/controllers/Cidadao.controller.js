const { ObjectId, MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');
const url = process.env.DB;

class CidadaoController {
    static async newCidadao(req, res) {
        const client = new MongoClient(url);
        const { cpf, nome, email, senha, imagem } = req.body;

        try {
            const opdb = client.db('opdb');

            opdb.collection('cidadao').find({ cpf }).toArray((err, value) => {
                if(err) throw err;
                try {
                    if(!value.length) {
                        const temp_path = __dirname + '/temp.txt';

                        opdb.collection('cidadao')
                        .insertOne({ cpf, nome, email, senha })
                        .then(async result => {
                            const bucket = new GridFSBucket(opdb, { bucketName: 'imagemPerfil' });
                            fs.writeFileSync(temp_path, Buffer.from(imagem))
                            fs.createReadStream(temp_path)
                            .pipe(bucket.openUploadStream(result.insertedId.toString(), {
                                chunkSizeBytes: 1048576
                            }))
                            .once('close', () => fs.unlinkSync(temp_path));
                            
                            res.json(!!result)
                        });
                    }
                    else throw 'CPF já cadastrado'
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
                    
                    bucket.openDownloadStreamByName(result._id.toString())
                    .once('data', data => {
                        result.imagem = data.toString();
                    })
                    .once('end', err => {
                        err && console.error(err)
                        client.close();
                        res.json(result);
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

        try {
            const opdb = client.db('opdb');
            const result = await opdb.collection('cidadao').updateOne(
                { _id: new ObjectId(data.id) },
                { $set: {
                    nome: data.nome,
                    cpf: data.cpf,
                    email: data.email,
                    senha: data.senha
                } }
            );

            let image_resp = false;
            if(data.imagem) {
                const temp_path = __dirname + '/temp.txt';
                const bucket = new GridFSBucket(opdb, { bucketName: 'imagemPerfil' });

                const clear = bucket.find({ filename: data.id })
                clear.forEach(doc => bucket.delete(doc._id))

                fs.writeFileSync(temp_path, Buffer.from(data.imagem))
                fs.createReadStream(temp_path)
                .pipe(bucket.openUploadStream(data.id, {
                    chunkSizeBytes: 1048576
                }))
                .once('close', () => {
                    fs.unlinkSync(temp_path);
                    image_resp = true;
                    client.close();
                })
                .once('error', err => {
                    if(err) {
                        console.error(err);
                    }
                });
            }
            else client.close();

            res.json({ modifiedCount: !!result.modifiedCount || image_resp });
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