//import React from 'react';
import axios from 'axios';
const url = 'https://ocorrencias-publicas-server.herokuapp.com/';
let conn = axios.create({
    baseURL: url,
    timeout: 30000
});

export default class ServerConnection {
    static async cadastro(data) {
        return await conn.post('/cidadao/cadastro', data);
    }

    static async validarCpf(data) {
        return await conn.post('/cidadao/validar', data)
    }

    static async categorias(data) {
        return await conn.post('/ocorrencia/getCategoria', data);
    }

    static async login(data) {
        return await conn.post('/cidadao/login', data);
    }

    static async editarPerfil(data) {
        return await conn.put('/cidadao/update', data);
    }

    static async deletePerfil(data) {
        return await conn.delete('/cidadao/delete', { data });
    }

    static async ocorrencia(data) {
        return await conn.post('/ocorrencia/new', data);
    }
    static async getAllOcorrencia() {
        return await conn.post('/ocorrencia/get');
    }
}