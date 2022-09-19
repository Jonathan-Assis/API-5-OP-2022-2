import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Start_Screen, User_Term, Sign_In, Sign_Up } from '../pages'

const AuthStack = createNativeStackNavigator()

export function AuthRoutes() {
    return (
        <AuthStack.Navigator initialRouteName='Start_Screen' screenOptions={{ headerShown:false }}>
            <AuthStack.Screen name='Start_Screen' component={Start_Screen} />
            <AuthStack.Screen name='User_Term' component={User_Term} />
            <AuthStack.Screen name='Sign_In' component={Sign_In} />
            <AuthStack.Screen name='Sign_Up' component={Sign_Up} options={{title:'Criar Conta', headerTitleAlign: 'center', headerShown:true}} />
        </AuthStack.Navigator>
    )
}
