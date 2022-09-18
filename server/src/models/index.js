const { MongoClient } = require('mongodb');
const uri = process.env.DB;
//let db_conn;

const client = new MongoClient(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

client.connect(err => {
    if(err) console.error(err);

    const collections = [
        client.db('opdb').collection('cidadao'),
        client.db('opdb').collection('ocorrencias'),
    ]
    client.close();
});

module.exports = client;