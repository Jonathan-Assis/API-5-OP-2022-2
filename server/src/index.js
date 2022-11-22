const express = require('express');
const cors = require('cors');
require("dotenv").config();
require('./models');

const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true, limit: '100mb' }))
app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});