import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import ServerConnection from '../services'
import { SHA256 } from 'crypto-js';
import { Alert, Image, Text } from "react-native";
import { PopUpAlert } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [authData, setAuth] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const [ popUpData, setPopUpData ] = useState({});
    const [ popUpVisible, setPopVisible ] = useState(false);

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

    async function signIn( cpf, senha, first ) {
        setLoading(true);
        let aux = SHA256(senha).toString();
        await ServerConnection.login({ cpf, senha: aux })
        .then(({data}) => {
            setAuth(JSON.stringify(data));
            AsyncStorage.setItem('@AuthData',(JSON.stringify(data)))
            .then(() => {
                if(first) {
                    setPopUpData({
                        icon: (
                            <Image
                                source={require('../assets/Logotype/LogoOP.png')}
                                resizeMode='contain'
                                style={{
                                    width: 90,
                                    height: 90
                                }}
                            />
                        ),
                        title: 'Bem-Vindo(a) ao Ocorrências Públicas!',
                        buttonPrimaryTitle: 'Começar a Usar'
                    });
                    setPopVisible(true);
                }
            });
            //console.log("Cidadão acessou a conta!")
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
        aux.imagem = aux.imagem?.assetId === null ? aux.imagem.base64 : ''

        setLoading(true);
        if(aux.senha !== undefined) {
            aux.senha = SHA256(aux.senha).toString();
        }
        

        /* const aux = {
            id, nome, email, cpf, senha,
            imagem: imagem?.assetId === null ? imagem.base64 : ''
        } */
        //console.log(aux)
        
        await ServerConnection.editarPerfil(aux)
        .then(res => {
            console.log(res)
            if(res.modifiedCount) {
                setAuth(JSON.stringify(aux/* {
                    _id, nome, email, cpf, senha, imagem
                } */));
                AsyncStorage.setItem('@AuthData',(JSON.stringify(aux)));
            }
            /* else {
                throw false;
            } */
        })
        .finally(() => {
            setLoading(false);
        })
        .catch(() => {})
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
            <PopUpAlert
                icon={popUpData.icon}
                title={popUpData.title}
                buttonPrimaryTitle={popUpData.buttonPrimaryTitle}
                onClose={setPopVisible}
                visible={popUpVisible}
            />

            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}