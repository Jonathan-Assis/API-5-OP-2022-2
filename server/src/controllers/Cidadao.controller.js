const { ObjectID, MongoClient } = require('mongodb');
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
            
            res.status(200).json(result);
        }
        catch(e) {
            console.error(e);
            res.status(400).json(e);
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
            const result = await opdb.collection('cidadao')
                .findOne({
                    $and: [
                        { cpf: data.cpf },
                        { senha: data.senha }
                    ]
                });
            
            res.json(!!result);
        }
        catch(e) {
            console.error(e);
            res.status(400).json(e);
        }
        finally {
            client.close();
        }
    }
}
module.exports = CidadaoController;