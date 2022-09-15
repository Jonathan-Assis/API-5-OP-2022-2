import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import stylesVar from '../styles/stylesVar'

import HomeIcon     from '../assets/Icons/house-door'
import FormIcon     from '../assets/Icons/journal-richtext'
import SettingsIcon from '../assets/Icons/gear'

import { StackHomeButton, StackFormButton, StackSettingsButton } from './Stack'

const Tab = createBottomTabNavigator()

const Routes = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    headerShown: false,
                    labelStyle: {
                        fontSize: 12,
                      },
                    tabBarStyle:{ ...stylesVar.toolbar },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'black'
                    
                }}>
                   <Tab.Screen name='Left' component={StackHomeButton} options={{tabBarLabel:'Início', tabBarIcon: ({color})=>{
                    <HomeIcon size={14} />
                   }}} />
                   <Tab.Screen name='Center' component={StackFormButton} options={{tabBarLabel:'Chamados', tabBarIcon: ({color})=>{
                    <FormIcon size={14} />
                   }}} />
                   <Tab.Screen name='Right' component={StackSettingsButton} options={{tabBarLabel:'Configurações', tabBarIcon: ({color})=>{
                    <SettingsIcon size={14} />
                   }}} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Routes