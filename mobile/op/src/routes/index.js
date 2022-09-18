import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../contexts/Auth'

import { AuthRoutes } from './AuthRoutes'
import { AppRoutes } from './AppRoutes'
import { View, Text } from 'react-native'

export function Routes () {
    const {authData, loading} = useAuth()
    if(loading){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Carregando OP!</Text>
            </View>
        )
    }

    return (
        <NavigationContainer>
            { authData ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}
