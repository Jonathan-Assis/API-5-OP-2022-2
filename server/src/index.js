const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const backupUtils = require('./utils/backupDB')

require("dotenv").config();
require('./models');


// need to install mongodump: https://www.mongodb.com/docs/database-tools/installation/installation/
// https://crontab.guru/#0_0_*/14_*_*
cron.schedule('0 0 */14 * *', () => backupUtils.backup()).start();

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