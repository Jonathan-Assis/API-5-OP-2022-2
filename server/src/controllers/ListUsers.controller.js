const { MongoClient } = require('mongodb');
const fs = require('fs');
const { dirname } = require('path')
const mongoURL = process.env.DB;
const keyServerConn = require('../models/keyServerConn');
const { AES, enc } = require('crypto-js');

class ListUsers {

    static async genList(_, res) {

        const client = new MongoClient(mongoURL);

        try {

            const opdb = client.db('opdb');
            const usuarios = await opdb.collection('cidadao').find({ id_chave: { $exists: true, $ne: null }}).toArray()

            const chaves = await keyServerConn.get('getAll').then(a => a.data);

            const threads = []

            usuarios.forEach(usuario => {
                threads.push(new Promise((resolve) => {
                    const key_index = chaves.findIndex(a => a.chave_id === usuario.id_chave)

                    if(key_index >= 0) {

                        const decrypt = JSON.parse(
                            AES.decrypt(usuario.data, chaves[key_index].chave)
                            .toString(enc.Utf8)
                        );

                        resolve(decrypt);
                    }
                    else resolve(null)
                }));
            });

            await Promise.all(threads).then(result => {
                const usuarios = result.filter(a => !!a)

                const srcPath = dirname(require.main.filename)
                const path = `${srcPath}/temp`

                if(!fs.existsSync(path)) {
                    fs.mkdirSync(path)
                }

                fs.writeFileSync(`${path}/users.log`, JSON.stringify(usuarios))

                res.json({ message: 'Arquivo de log criado' })
            });
        } catch (e) {
            console.error(e);
            res.status(500).json(e);
        }
    }

}

module.exports = ListUsers;