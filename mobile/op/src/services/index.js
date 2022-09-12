//import React from 'react';
import axios from 'axios';
const url = 'http://192.168.56.1:3001';

export default class ServerConnection {
    static async cadastro(data) {
        
    }

    static async login(data) {
        let conn = axios.create({
            baseURL: url,
            timeout: 30000
        });

        return await conn.post('/cidadao/login', data);
    }
}