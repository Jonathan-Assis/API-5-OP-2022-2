const express = require('express');
const cors = require('cors');
require("dotenv").config();
require('./models');

const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true, limit: '5gb' }))
app.use(cors());
app.use(express.json());
app.use('/', routes);

let host = '0.0.0.0'

app.listen({ 
    port: port,
    host: host
}, console.log(`Listening on port: ${port}`)
)