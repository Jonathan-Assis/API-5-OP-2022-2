import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Colors, StyledColors } from '../styles'

import HomeIcon     from '../assets/Icons/megaphone-fill'
import FormIcon     from '../assets/Icons/journal-richtext'
import SettingsIcon from '../assets/Icons/list-ul'

import { StackHomeButton, StackFormButton, StackSettingsButton } from './Stack'

const Tab = createBottomTabNavigator()

export function AppRoutes (){
    return (
        <>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle:{
                    ...StyledColors.background.Primary,
                    paddingVertical:8
                },
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: '600',
                },
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: Colors.white,
                tabBarInactiveTintColor: Colors.black,
                activeColor: Colors.white,
                inactiveColor: Colors.black,
            }}>
                <Tab.Screen
                    name='Left'
                    component={StackHomeButton}
                    options={{
                        tabBarLabel:'Reportar',
                        tabBarIcon:({color}) => (
                            <HomeIcon size={30} fill={color} /> 
                        )
                    }} 
                />
                <Tab.Screen
                    name='Center'
                    component={StackFormButton}
                    options={{
                        tabBarLabel:'Chamados',
                        tabBarIcon:({color}) => (
                            <FormIcon size={25} fill={color} /> 
                        )
                    }}
                />
                <Tab.Screen
                    name='Right'
                    component={StackSettingsButton}
                    options={{
                        tabBarLabel:'Opções',
                        tabBarIcon:({color}) => (
                            <SettingsIcon size={26} fill={color} /> 
                        )
                    }}
                />
            </Tab.Navigator>
        </>
    )
}