const { ObjectId, MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');
const url = process.env.DB;

class OcorrenciaController {
    static async newOcorrencia(req, res) {
        const client = new MongoClient(url);

        const data = req.body;

        if(typeof data.local === 'string'){
            data.local = JSON.parse(data.local)
        }

        try {
            const opdb = client.db('opdb');
            await opdb.collection('ocorrencias')
            .insertOne({
                cidadao: ObjectId(data.cidadao),
                local: data.local,
                titulo: data.titulo,
                descricao: data.descricao,
                categoria: data.categoria,
                subCategoria: data.subCategoria,
                data: data.data,
                bairro: data.bairro
            })
            .then(async result => {
                if(result && data.imagem.length) {
                    const temp_path = __dirname + '/temp.txt';
                    const bucket = new GridFSBucket(opdb, { bucketName: 'imagemOcorrencia' });

                    fs.writeFileSync(temp_path, Buffer.from(data.imagem));
                    fs.createReadStream(temp_path)
                    .pipe(bucket.openUploadStream(result.insertedId.toString(), {
                        chunkSizeBytes: 1048576
                    }))
                    .once('close', () => {
                        fs.unlinkSync(temp_path);
                        client.close();
                        res.json(true);
                    })
                    .once('error', err => {
                        if(err) throw err;
                    })
                }
                else res.json(true);
            });
        }
        catch(e) {
            console.error(e);
            res.status(400).json(e);
        }
    }

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

            const bucket = new GridFSBucket(opdb, { bucketName: 'imagemOcorrencia' });

            if(Object.keys(data).length !== 0) {
                await opdb.collection('ocorrencias').findOne({
                    _id: new ObjectId(data.id)
                })
                .then(result => {
                    bucket.openDownloadStreamByName(result._id.toString())
                    .once('error', err => {
                        err?.code === 'ENOENT' && console.error(err);
                        client.close();
                        res.json(result);
                    })
                    .once('data', data => {
                        client.close();
                        
                        res.json({
                            ...result,
                            foto: data.toString()
                        });
                    });
                })
                .catch(e => {
                    console.error(e);
                    throw 'Ocorrência não encontrada';
                });
            }
            else {
                await opdb.collection('ocorrencias')
                .find({}).toArray()
                .then(async ocorrencia => {
                    const imgs = opdb.collection('imagemOcorrencia.files')
                    .aggregate([
                        {
                          '$lookup': {
                            'from': 'imagemOcorrencia.chunks', 
                            'localField': '_id', 
                            'foreignField': 'files_id', 
                            'as': 'imagem'
                          }
                        }
                    ]);

                    for await(const img of imgs) {
                        const index = ocorrencia.findIndex(a => {
                            return (
                                a._id.toString() === img.filename
                            )
                        });

                        if(index >= 0) {
                            ocorrencia[index].imagem = img?.imagem['0']?.data?.buffer.toString();
                        }
                    }
                    
                    res.json(ocorrencia);
                });
            }
        }
        catch(e) {
            console.error(e);
            res.status(400).json({error: e});
        }
        finally {
            //client.close();
        }
    }
    static async getLastOcorrencia(req,res) {
        const client = new MongoClient(url);
        const data = req.body;

        try {
            const opdb = client.db('opdb');

            const bucket = new GridFSBucket(opdb, { bucketName: 'imagemOcorrencia' });
            await opdb.collection('ocorrencias').findOne({}, {sort:{$natural:-1}})
                .then(result => {
                bucket.openDownloadStreamByName(result._id.toString())
                .once('error', err => {
                    err?.code === 'ENOENT' && console.error(err);
                    client.close();
                    res.json(result);
                })
                .once('data', data => {
                    client.close();
                    
                    res.json({
                        ...result,
                        foto: data.toString()
                    });
                });
            })
            .catch(e => {
                console.error(e);
                throw 'Ocorrência não encontrada';
            });
        }
        catch(e) {
            console.error(e);
            res.status(400).json({error: e});
        }
        finally {
            //client.close();
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