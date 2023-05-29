const axios = require('axios');

const keyServerURL = process.env.KEY_SERVER_URL;

const keyServerConn = axios.default.create({
    baseURL: keyServerURL,
    headers: {
        "Content-Type": 'application/json'
    }
})

module.exports = keyServerConn;