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
        let formBody = [];
        for(let property in data) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join("&");
        return await conn.put('/cidadao/update', formBody, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${tokenData}`,
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
        let formBody = [];
        for(let property in data) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join("&");
        return await conn.post('/ocorrencia/new', formBody, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${tokenData}`,
            },
        });
    }

    static async getLastTermos(){
        return await conn.get('/termos/last')
    }

    static async compairTermos(data){
        console.log(data)
        return await conn.post('/termos/compair', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

}