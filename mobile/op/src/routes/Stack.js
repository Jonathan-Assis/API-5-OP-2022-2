import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import stylesVar from '../styles/stylesVar'

import * as Pages from '../pages'

const StackHome = createStackNavigator()

const StackHomeButton = () => {
    return(
        <StackHome.Navigator initialRouteName='Rep_tipo' screenOptions={{
            headerTitleAlign: 'center', headerTintColor: stylesVar.toolbarTitle.color, headerStyle:{...stylesVar.toolbar}
        }}>
            <StackHome.Screen name='Home' component={Pages.Home} options={{headerShown:false}} />
            <StackHome.Screen name='Rep_Ocorrencia' component={Pages.Rep_Ocorrencia} options={{title:'Reportar Ocorrência'}} />        
            <StackHome.Screen name='Rep_Tipo' component={Pages.Rep_Tipo} options={{title:'Tipo da Ocorrência'}} />        
            <StackHome.Screen name='Maps' component={Pages.Maps} options={{headerShown:false}} />        
            <StackHome.Screen name='Loading' component={Pages.Loading} options={{headerShown:false}} />      
            <StackHome.Screen name='Start_Screen' component={Pages.Splash_Screen} />  
        </StackHome.Navigator>
    )
}

const StackForm = createStackNavigator()

const StackFormButton = () => {
    return(
        <StackForm.Navigator initialRouteName='Chamados' screenOptions={{
            headerTitleAlign: 'center', headerTintColor: stylesVar.toolbarTitle.color, headerStyle:{...stylesVar.toolbar}
        }}>
            <StackForm.Screen name='Chamados' component={Pages.Chamados} options={{headerShown:false}} />
        </StackForm.Navigator>
    )
}

const StackSettings = createStackNavigator()

const StackSettingsButton = () => {
    return(
        <StackSettings.Navigator initialRouteName='Settings' screenOptions={{
            headerShown: true, headerTitleAlign: 'center', headerTintColor: stylesVar.toolbarTitle.color, headerStyle:{...stylesVar.toolbar}
        }}>
            <StackSettings.Screen name='Settings' component={Pages.Settings} options={{title:'Configurações', headerShown:false}} />
            <StackSettings.Screen name='Edit_Profile' component={Pages.Edit_Profile} options={{title:'Editar Perfil'}} />
            <StackSettings.Screen name='Sign_Out' component={Pages.Sign_Out} options={{headerShown:false}} />
        </StackSettings.Navigator>
    )
}

export { StackHomeButton, StackFormButton, StackSettingsButton }