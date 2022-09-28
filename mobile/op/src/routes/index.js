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

import User_Term from '../pages/User_Term'
import Home from '../pages/Home'
import Rep_Ocorrencia from '../pages/Rep_Ocorrencia'
import Chamados from '../pages/Chamados'

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerTitleAlign: 'center', headerTintColor: stylesVar.toolbarTitle.color ,headerStyle:{...stylesVar.toolbar}
            }}>
                <Stack.Screen name='User_Term' component={User_Term} options={{title:'Termos de Uso', headerShown:false}} />
                <Stack.Screen name='Home' component={Home} options={{title:'Painel Inicial'}} />
                <Stack.Screen name='Rep_Ocorrencia' component={Rep_Ocorrencia} options={{title:'Reportar Ocorrência'}} />
                <Stack.Screen name='Chamados' component={Chamados} options={{title:'Chamados Abertos'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
