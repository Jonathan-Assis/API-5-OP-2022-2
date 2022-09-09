const { ObjectId, MongoClient } = require('mongodb');
const url = process.env.DB;

class OcorrenciaController {
    /*
    {
        municipe: ObjectID,
        local: {
            lat: number,
            long: number
        },
        categoria: {
            id: string,
            tipo: string
        }
    }
    */
    static async newOcorrencia(req, res) {
        const client = new MongoClient(url);
        const data = req.body;

        try {
            const opdb = client.db('opdb');
            const result = await opdb.collection('ocorrencias')
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

    /*
    {
        tipo: string,
        categorias: [
            {
                id: string,
                tipo: string
            }
        ]
    }
    */
    static async newCategoria(req, res) {
        const client = new MongoClient(url);
        const data = req.body;

        try {
            const opdb = client.db('opdb');
            const result = await opdb.collection('categorias')
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

    static async getCategoria(req, res) {
        const client = new MongoClient(url);
        const data = req.body;

        try {
            const opdb = client.db('opdb');

            let result = {};
            if(Object.keys(data).length !== 0) {
                result = await opdb.collection('categorias')
                    .findOne(
                        {
                            $and: [
                                { _id: new ObjectId(data.id) },
                                { 'categorias.id': data.tipo_id }
                            ]
                        }
                    );
            }
            else {
                result = await opdb.collection('categorias')
                    .find({}).toArray();
            }

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
}

module.exports = OcorrenciaController;