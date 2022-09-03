//const conn = require('../models');
const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB;

class OcorrenciasController {
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

            //parei aqui
            ///////////////////////////////////////////////////////////////////////////////////////

            let result;
            if(Object.keys(data).length !== 0) {
                result = await opdb.collection('categorias')
                    .find([
                        { _id: data.id },
                        { 'categorias.tipo': new RegExp(data.tipo_id) }
                    ]).toArray();
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

module.exports = OcorrenciasController;