const { ObjectId, MongoClient } = require('mongodb');
const url = process.env.DB;

class OcorrenciaController {
    /*
    {
        cidadao: ObjectID,
        foto: string,
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

        // talvez trocar o 'insertOne' por um
        // 'updateOne' com o upsert

        try {
            const opdb = client.db('opdb');
            const result = await opdb.collection('ocorrencias')
                .insertOne(data);
            
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

    static async getOcorrencia(req, res) {
        const client = new MongoClient(url);
        const data = req.body;

        try {
            const opdb = client.db('opdb');

            let result = {};
            if(Object.keys(data).length !== 0) {
                result = await opdb.collection('ocorrencias').findOne({
                    _id: new ObjectId(data.id)
                });
            }
            else {
                result = await opdb.collection('ocorrencias')
                    .find({}).toArray();
            }

            if(!!result) {
                res.json(result);
            }
            else {
                throw 'Ocorrência não encontrada'
            }
        }
        catch(e) {
            console.error(e);
            res.status(400).json({error: e});
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
                const aux = opdb.collection('categorias').aggregate([
                    {
                      $match: {
                        _id: new ObjectId(data.id)
                      }
                    }, {
                      $unwind: {
                        path: '$categorias', 
                        preserveNullAndEmptyArrays: true//
                      }
                    }, {
                      $match: {
                        'categorias.id': data.tipo_id
                      }
                    },
                    { $limit: 1 }
                  ]
                );

                result = await aux.toArray().then(data => data[0]);
            }
            else {
                result = await opdb.collection('categorias')
                    .find({}).toArray();
            }

            if(!!result) {
                res.json(result);
            }
            else {
                throw 'Categoria não encontrada'
            }
        }
        catch(e) {
            console.error(e);
            res.status(400).json({error: e});
        }
        finally {
            client.close();
        }
    }

    static async updateOcorrencia(req, res) {
        const client = new MongoClient(url);
        const data = req.body;

        try {
            const opdb = client.db('opdb');
            const result = await opdb.collection('ocorrencias').updateOne(
                { _id: new ObjectId(data.id) },
                { $set: {
                    cidadao: data.cidadao,
                    local: data.local,
                    categoria: data.categoria
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

    static async deleteOcorrencia(req, res) {
        const client = new MongoClient(url);
        const data = req.body;

        try {
            const opdb = client.db('opdb');
            const result = await opdb.collection('ocorrencias').deleteOne({
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

module.exports = OcorrenciaController;