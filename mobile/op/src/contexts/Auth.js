import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import ServerConnection from '../services'
import { SHA256 } from 'crypto-js';
import { Alert } from "react-native";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [authData, setAuth] = useState(undefined);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        loadFromStorage();
    },[])
    
    async function loadFromStorage() {
        const auth = await AsyncStorage.getItem('@AuthData')
        if(auth){
            setAuth((auth));
        }
        setLoading(false)
    }

    async function signIn(cpf,senha) {
        setLoading(true);
        let aux = SHA256(senha).toString();
        await ServerConnection.login({ cpf, senha: aux })
        .then(({data}) => {
            setAuth(JSON.stringify(data));
            AsyncStorage.setItem('@AuthData',(JSON.stringify(data)));
            console.log("Cidadão acessou a conta!")
        })
        .catch(() => {
            Alert.alert('Falha no acesso', 'CPF ou Senha inválidos.')
        })
        .finally(() => {
            setLoading(false);
        });
    }

    async function signUp(nome, cpf, email, senha) {
        setLoading(true);
        let aux = SHA256(senha).toString();
        
        await ServerConnection.cadastro({
            nome, cpf, email, senha: aux
        })
        .catch((e) => {
            console.error(e);
        })
        .finally(async () => {
            await signIn(cpf, aux);
            setLoading(false);
        });
    }

    async function updateAuth(data) {
        const { id, nome, email, cpf, senha } = data;

        setLoading(true);
        let aux = SHA256(senha).toString();
        await ServerConnection.editarPerfil({
            id, nome, email, cpf, senha: aux
        })
        .then(res => {
            if(!!res.data.modifiedCount) {
                setAuth(JSON.stringify(data));
                AsyncStorage.setItem('@AuthData',(JSON.stringify(data)));
            }
            else {
                throw false;
            }
        })
        .finally(() => {
            setLoading(false);
        })
        .catch(() => {});
    }

    async function deleteAuth(id) {
        setLoading(true);
        await ServerConnection.deletePerfil({ id: id })
        .then(({data}) => {
            if(!!data.deletedCount) {
                console.log('Conta deletada com sucesso');
            }
            else throw 'Falha ao deletar a conta';
        })
        .finally(() => {
            setAuth(undefined);
            AsyncStorage.removeItem('@AuthData');
            setLoading(false);
        })
        .catch(e => Alert.alert('Erro', e));
    }

    async function signOut() {
        setAuth(undefined)
        AsyncStorage.removeItem('@AuthData')
        console.log("Cidadão saiu da conta!")
    }

    return (
        <AuthContext.Provider value={{authData, loading, signIn, signOut, signUp, updateAuth, deleteAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}