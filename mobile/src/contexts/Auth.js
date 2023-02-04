import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import ServerConnection from '../services'
import { SHA256 } from 'crypto-js';
import { Alert } from "react-native";
import { Walkthrough } from "../components";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [authData, setAuth] = useState(undefined);
    const [token, setToken] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const [walkOn,setWalkOn] = useState(false)

    useEffect(()=>{
        loadFromStorage();
    },[])
    
    async function loadFromStorage() {
        const auth = await AsyncStorage.getItem('@AuthData')
        //const token = await AsyncStorage.getItem('@Token')
        if(auth){
            setAuth((auth));
        }
        setLoading(false)
    }

    async function signIn( cpf, senha, first ) {
        setLoading(true);
        let aux = SHA256(senha).toString();
        await ServerConnection.login({ cpf, senha: aux })
        .then(({data}) => {
            setToken(data.token)
            setAuth(JSON.stringify(data.result));
            AsyncStorage.setItem('@Token',(data.token))
            AsyncStorage.setItem('@AuthData',(JSON.stringify(data.result)))
            .then(() => {
                if(first) {
                   setWalkOn(true)
                }
            });
        })
        .catch((e) => {
            Alert.alert('Falha no acesso', 'CPF ou Senha inválidos.')
            console.error({...e})
        })
        .finally(() => {
            setLoading(false);
        });
    }

    async function signUp(nome, cpf, email, senha, imagem) {
        setLoading(true);
        let aux = SHA256(senha).toString();
        
        await ServerConnection.cadastro({
            nome, cpf, email, senha: aux, imagem
        })
        .catch((e) => {
            console.error(e);
        })
        .finally(async () => {
            await signIn(cpf, senha, true);
            setLoading(false);
        });
    }

    async function updateAuth(data) {
        let aux = data;
        
        aux.senha = aux.senha
        ? aux.senha === aux.senha_prev
            ? aux.senha_prev : SHA256(aux.senha).toString()
        : aux.senha_prev;
        delete aux.senha_prev

        if(aux.imagem?.base64?.length) {
            if(!!aux.imagem?.type) {
                aux.imagem = aux.imagem.base64;// nova imagem
            }
            else {
                aux.imagem = false;// não altera a imagem
            }
        }
        else {
            aux.imagem = 'null';// deleta a imagem
        }

        setLoading(true);        
        await ServerConnection.editarPerfil(aux)
        .then(res => {
            console.log(res)
            if(res?.modifiedCount) {
                if(aux.imagem === 'null') delete aux.imagem;
                aux._id = aux.id;
                delete aux.id
                setAuth(JSON.stringify(aux));
                AsyncStorage.setItem('@AuthData',(JSON.stringify(aux)));
            }
        })
        .finally(() => {
            setLoading(false);
        })
        .catch((e) => {console.error(e)})
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
            setToken(undefined);
            AsyncStorage.removeItem('@AuthData');
            AsyncStorage.removeItem('@Token');
            setLoading(false);
        })
        .catch(e => Alert.alert('Erro', e));
    }

    async function signOut() {
        setAuth(undefined)
        setToken(undefined);
        AsyncStorage.removeItem('@AuthData')
        AsyncStorage.removeItem('@Token');
    }

    return (
        <AuthContext.Provider value={{authData, loading, signIn, signOut, signUp, updateAuth, deleteAuth}}>
        <Walkthrough 
            walkOn={walkOn} 
            setWalkOn={setWalkOn}
        />
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}