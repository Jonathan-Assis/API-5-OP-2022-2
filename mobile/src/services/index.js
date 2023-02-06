import axios from 'axios';
 
const url = 'http://192.168.18.4:3001';
let conn = axios.create({
    baseURL: url,
    timeout: 30000,
});

export default class ServerConnection {
    static async cadastro(data) {
        return await conn.post('/cidadao/cadastro', data);
    }

    static async validarCpf(data) {
        return await conn.post('/cidadao/validar', data)
    }
    
    static async login(data) {
        return await conn.post('/cidadao/login', data);
    }

    static async editarPerfil(data, tokenData) {
        return await conn.put('/cidadao/update', data, {
            headers: {
                Authorization: `Bearer ${tokenData}`
            },
        })
        .then(({ data }) => data);
    }

    static async deletePerfil(data, tokenData) {
        return await conn.delete('/cidadao/delete', { data }, {
            headers: {
                Authorization: `Bearer ${tokenData}`
            },
        });
    }
    
    static async categorias(tokenData) {
        return await conn.post('/ocorrencia/getCategoria', {}, { 
            headers: {
                Authorization: `Bearer ${tokenData}`
            },
        });
    }

    static async getAllOcorrencia(tokenData) {
        return await conn.post('/ocorrencia/get', {}, {
            headers: {
                Authorization: `Bearer ${tokenData}`
            },
        });
    }

    static async ocorrencia(data, tokenData) {
        return await conn.post('/ocorrencia/new', data, {
            headers: {
                Authorization: `Bearer ${tokenData}`
            },
        });
    }

}