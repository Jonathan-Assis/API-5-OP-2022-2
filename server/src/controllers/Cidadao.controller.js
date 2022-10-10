const { ObjectId, MongoClient } = require('mongodb');
const url = process.env.DB;

class CidadaoController {
    /*
    {
        nome: string,
        cpf: string,
        email: string,
        senha: string (criptografado)
    }
    */
    static async newCidadao(req, res) {
        const client = new MongoClient(url);
        const data = req.body;

        try {
            const opdb = client.db('opdb');

            opdb.collection('cidadao').find({ cpf: data.cpf }).toArray((err, value) => {
                if(err) throw err;
                try {
                    if(!value.length) {
                        opdb.collection('cidadao')
                        .insertOne(data)
                        .then(result => res.json(!!result))
                        .catch(e => { throw e });
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
            const result = await opdb.collection('cidadao').findOne({
                cpf: data.cpf,
                senha: data.senha 
            });
            
            if(!!result)
                res.json(result);
            else
                throw 'CPF ou Senha inválidos'
        }
        catch(e) {
            console.error(e);
            res.status(400).json({ error: e });
        }
        finally {
            client.close();
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
                /* , { upsert: true } */
            );

            res.json({ modifiedCount: result.modifiedCount });
        }
        catch(e) {
            console.error(e);
            res.status(400).json({ error: e });
        }
        finally {
            client.close();
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