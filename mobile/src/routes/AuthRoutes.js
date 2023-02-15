import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import stylesVar from '../styles/stylesVar'

import { Sign_In, Sign_Up } from '../pages'

const AuthStack = createStackNavigator()

export function AuthRoutes() {
    return (
        <AuthStack.Navigator initialRouteName='Sign_In' screenOptions={{ headerShown:false }}>
            <AuthStack.Screen name='Sign_In' component={Sign_In} />
            <AuthStack.Screen name='Sign_Up' component={Sign_Up}
                options={{
                    headerShown: true,
                    title:'Criar Conta',
                    headerTitleAlign: 'center',
                    headerStyle: { ...stylesVar.toolbar },
                    headerTintColor: 'white'
                }}
            />
        </AuthStack.Navigator>
    )
}
