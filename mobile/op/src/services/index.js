//import React from 'react';
import axios from 'axios';
const url = 'http://172.16.4.63:3001';
let conn;

export default class ServerConnection {
    constructor() {
        conn = axios.create({
            baseURL: url,
            timeout: 30000
        });
    }

    async cadastro(data) {
        
    }

    async login(data) {
        return await conn.post('/cidadao/login', data);
    }
}