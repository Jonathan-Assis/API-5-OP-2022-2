//import React from 'react';
import axios from 'axios';
const url = 'https://ocorrencias-publicas-server.herokuapp.com/';
let conn = axios.create({
    baseURL: url,
    timeout: 30000
});

export default class ServerConnection {
    /**
     * 
     * @param {{
     *  nome: string,
     *  cpf: string,
     *  endereco: string,
     *  bairro: string,
     *  senha: string
     * }} data 
     * 
     * @example ServerConnection.cadastro({
     *  nome: 'Guguinha',
     *  cpf: '123456789/00',
     *  endereco: 'Rua da Alegria, n°42',
     *  bairro: 'Bairro do Abacate',
     *  senha: 'senha123'
     * })
     */
    static async cadastro(data) {
        return await conn.post('/cidadao/cadastro', data);
    }

    static async login(data) {
        return await conn.post('/cidadao/login', data);
    }
}