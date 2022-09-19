import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from "react-native";
import {authService} from '../services/authService'
import ServerConnection from '../services'


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
        const auth = await ServerConnection.login({cpf,senha})
        .then(({data}) => String.toString(data)

        ).finally(() => {
            setLoading(false);
        });
        setAuth(auth);
        AsyncStorage.setItem('@AuthData',(auth));
        console.log("Cidadão acessou a conta!")
    }


    async function signOut() {
        setAuth(undefined)
        AsyncStorage.removeItem('@AuthData')
        console.log("Cidadão saiu da conta!")
    }

    return (
        <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}