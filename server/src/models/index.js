const client = require('mongodb').MongoClient;
const url = process.env.DB;
//let db_conn;

client.connect(url, (e, db) => {
    if(e) throw e;
    console.log('Conectado ao banco.');
    db.close();
});

module.exports = client;