import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import stylesVar from '../styles/stylesVar'

import * as Pages from '../pages'

const StackHome = createStackNavigator()

const StackHomeButton = () => {
    return(
        <StackHome.Navigator initialRouteName='Home' screenOptions={{
            headerTitleAlign: 'center', headerTintColor: stylesVar.toolbarTitle.color, headerStyle:{...stylesVar.toolbar}
        }}>
            <StackHome.Screen name='Home' component={Pages.Home} options={{headerShown:false}} />
            <StackHome.Screen name='Rep_Ocorrencia' component={Pages.Rep_Ocorrencia} options={{title:'Reportar Ocorrência'}} />        
            <StackHome.Screen name='Maps' component={Pages.Maps} options={{headerShown:false}} />        
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
        </StackSettings.Navigator>
    )
}

export { StackHomeButton, StackFormButton, StackSettingsButton }