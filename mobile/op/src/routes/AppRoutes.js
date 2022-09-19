import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import stylesVar from '../styles/stylesVar'

import HomeIcon     from '../assets/Icons/house-door'
import FormIcon     from '../assets/Icons/journal-richtext'
import SettingsIcon from '../assets/Icons/list-ul'

import { StackHomeButton, StackFormButton, StackSettingsButton } from './Stack'

const Tab = createBottomTabNavigator()

export function AppRoutes (){
    return (
        <>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle:{ ...stylesVar.toolbar, paddingVertical:8 },
                tabBarLabelStyle: {
                    fontSize: 15,
                    },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                activeColor: 'white',
                inactiveColor: 'black',
            }}>
                <Tab.Screen name='Lef-t' component={StackHomeButton} options={{tabBarLabel:'Início', tabBarIcon:({color})=>(
                <HomeIcon size={24} fill={color} /> 
                )}} />
                <Tab.Screen name='Center' component={StackFormButton} options={{tabBarLabel:'Chamados', tabBarIcon:({color})=>(
                <FormIcon size={24} fill={color} /> 
                )}} />
                <Tab.Screen name='Right' component={StackSettingsButton} options={{tabBarLabel:'Configurações', tabBarIcon:({color})=>(
                <SettingsIcon size={24} fill={color} /> 
                )}} />
            </Tab.Navigator>
        </>
    )
}