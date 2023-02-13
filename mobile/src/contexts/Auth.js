import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from 'expo-notifications'
import ServerConnection from '../services'
import { SHA256 } from 'crypto-js';
import { Alert } from "react-native";
import { Walkthrough, PopUpAlert } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarDays, faCircleInfo, faLocationDot, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export const AuthContext = createContext({});

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

export const AuthProvider = ({children}) =>{
    const [authData, setAuth] = useState(undefined);
    const [tokenData, setTokenData] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const [walkOn, setWalkOn] = useState(false)

    useEffect(()=>{
        loadFromStorage();
        //scheduleNotification()
        //getScheduleNotification()
    },[])

    async function scheduleNotification() {
        /* const trigger = new Date(Date.now());
        trigger.setMinutes(trigger.getMinutes() + 1); */
    
        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'OP says Hello World! 📣',
            body: 'Welcome to the app'
          },
          trigger: {seconds: 2}
        });
      }
    
      /**
       *  Log of List notifications
       */
      async function getScheduleNotification() {
        const schedules = await Notifications.getAllScheduledNotificationsAsync();
        //console.log(schedules);
      }


    async function loadFromStorage() {
        const auth = await AsyncStorage.getItem('@AuthData')
        const token = await AsyncStorage.getItem('@Token')
        if(auth && token){
            setAuth((auth));
            setTokenData(token)
        }
        setLoading(false)
    }

    async function signIn( cpf, senha, first ) {
        setLoading(true);
        let aux = SHA256(senha).toString();
        await ServerConnection.login({ cpf, senha: aux })
        .then(({data}) => {
            setTokenData(data.token)
            setAuth(JSON.stringify(data.result));
            AsyncStorage.setItem('@Token',(JSON.stringify(data.token)))
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
        await ServerConnection.editarPerfil(aux, tokenData)
        .then(res => {
            if(res?.modifiedCount) {
                if(aux.imagem === 'null') delete aux.imagem;
                aux._id = aux.id;
                delete aux.id
                setAuth(JSON.stringify(aux));
                AsyncStorage.setItem('@AuthData',(JSON.stringify(aux)));
            }
        })
        .catch((e) => {
            if(e.response.status === 401){
                signOut();
            }
        })
        .finally(() => {
            setLoading(false);
        })
    }

    async function deleteAuth(id) {
        setLoading(true);
        await ServerConnection.deletePerfil({ id: id }, tokenData)
        .then(({data}) => {
            if(!!data.deletedCount) {
                console.log('Conta deletada com sucesso');
            }
            else throw 'Falha ao deletar a conta';
        })
        .catch((e) => {
            if(e.response.status === 401){
                signOut();
            }
        })
        .finally(() => {
            setAuth(undefined);
            setTokenData(undefined);
            AsyncStorage.removeItem('@AuthData');
            AsyncStorage.removeItem('@Token');
            setLoading(false);
        })
    }

    async function signOut(code) {
        setAuth(undefined)
        setTokenData(undefined);
        AsyncStorage.removeItem('@AuthData');
        AsyncStorage.removeItem('@Token');
        /* code === '401' ?
            alert.Alert(
                'Sessão expirada', 
                'Necessário a autenticação para utilizar as funcionalidades do app.', [
                {text: 'Ok'}
              ],
              {cancelable: false}
            )
        :
            alert.Alert('Saindo da conta') */
    }

    return (
        <AuthContext.Provider value={{authData, tokenData, loading, signIn, signOut, signUp, updateAuth, deleteAuth}}>
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