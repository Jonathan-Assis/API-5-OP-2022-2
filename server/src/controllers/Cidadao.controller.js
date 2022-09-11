const { ObjectID, MongoClient, ObjectId } = require('mongodb');
const url = process.env.DB;

class CidadaoController {
    /*
    {
        nome: string,
        cpf: string,
        endereco: string,
        bairro: string,
        senha: string (criptografado)
    }
    */
    static async newCidadao(req, res) {
        const client = new MongoClient(url);
        const data = req.body;

        try {
            const opdb = client.db('opdb');
            const result = await opdb.collection('cidadao')
                .insertOne(data);
            
            res.json(!!result);
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
            
            res.json(!!result);
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
                    endereco: data.endereco,
                    bairro: data.bairro,
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
        const data = req.body;

        try {
            const opdb = client.db('opdb');
            const result = await opdb.collection('cidadao').deleteOne({
                _id: new ObjectId(data.id)
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