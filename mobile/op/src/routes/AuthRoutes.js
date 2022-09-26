import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Splash_Screen, User_Term, Sign_In, Sign_Up } from '../pages'

const AuthStack = createStackNavigator()

export function AuthRoutes() {
    return (
        <AuthStack.Navigator initialRouteName='Splash_Screen' screenOptions={{ headerShown:false }}>
            <AuthStack.Screen name='Splash_Screen' component={Splash_Screen} />
            <AuthStack.Screen name='User_Term' component={User_Term} />
            <AuthStack.Screen name='Sign_In' component={Sign_In} />
            <AuthStack.Screen name='Sign_Up' component={Sign_Up} options={{title:'Criar Conta', headerTitleAlign: 'center', headerShown:true}} />
        </AuthStack.Navigator>
    )
}
