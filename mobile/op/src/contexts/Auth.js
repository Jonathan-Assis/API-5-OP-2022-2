import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import ServerConnection from '../services'
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
        await ServerConnection.login({cpf,senha})
        .then(({data}) => {
            setAuth(String.toString(data));
            AsyncStorage.setItem('@AuthData',(String.toString(data)));
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
        await ServerConnection.cadastro({
            nome, cpf, email, senha
        })
        .catch(() => {
            Alert.alert('Falha no cadastro', 'Campo(s) obrigatório(s) vazio(s).')
        })
        .finally(async () => {
            await signIn(cpf, senha);
            setLoading(false);
        });
    }

    async function signOut() {
        setAuth(undefined)
        AsyncStorage.removeItem('@AuthData')
        console.log("Cidadão saiu da conta!")
    }

    return (
        <AuthContext.Provider value={{authData, loading, signIn, signOut, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}