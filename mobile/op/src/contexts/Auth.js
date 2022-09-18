import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from "react-native";
import {authService} from '../services/authService'


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
            setAuth(JSON.parse(auth));
        }
        setLoading(false)
    }

    async function signIn(cpf,senha) {
        try{
            const auth = await authService.signIn(cpf,senha);
            setAuth(auth);
            AsyncStorage.setItem('@AuthData', JSON.stringify(auth));
        } catch(error) {
        Alert.alert(error.message, 'Favor revise o CPF e a senha se estão corretos.');
    }
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