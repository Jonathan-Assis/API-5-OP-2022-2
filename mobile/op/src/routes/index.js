import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../contexts/Auth'
import { AuthRoutes } from './AuthRoutes'
import { AppRoutes } from './AppRoutes'
import { View, Text, ActivityIndicator } from 'react-native'

export function Routes () {
    const {authData, loading} = useAuth()
    if(loading){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color='gray' size={45} />
                <Text style={{fontSize:20}}>Carregando o OP!</Text>
            </View>
        )
    }

    return (
        <NavigationContainer>
            { authData ? <AppRoutes /> : <AuthRoutes />} 
        </NavigationContainer>
    )
}
