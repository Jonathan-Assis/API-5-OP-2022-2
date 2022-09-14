import React from 'react';
import stylesVar from '../styles/stylesVar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import User_Term from '../pages/User_Term'
import Home from '../pages/Home'
import Rep_Ocorrencia from '../pages/Rep_Ocorrencia'
import Chamados from '../pages/Chamados'
import Start_Screen from '../pages/Start_Screen'

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Start_Screen' screenOptions={{
                headerTitleAlign: 'center', headerTintColor: stylesVar.toolbarTitle.color ,headerStyle:{...stylesVar.toolbar}
            }}>
                <Stack.Screen name='Start_Screen' component={Start_Screen} options={{title:'Start_Screen', headerShown:false}} />
                <Stack.Screen name='User_Term' component={User_Term} options={{title:'Termos de Uso', headerShown:false}} />
                <Stack.Screen name='Home' component={Home} options={{title:'Painel Inicial'}} />
                <Stack.Screen name='Rep_Ocorrencia' component={Rep_Ocorrencia} options={{title:'Reportar Ocorrência'}} />
                <Stack.Screen name='Chamados' component={Chamados} options={{title:'Chamados Abertos'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;