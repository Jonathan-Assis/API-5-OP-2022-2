import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import stylesVar from '../styles/stylesVar'

import * as Pages from '../pages'

const StackWalkthrough = createStackNavigator()

const Walkthrough = () => {
    return(
        <StackWalkthrough.Navigator initialRouteName='Report' screenOptions={{
            headerTitleAlign: 'center', headerTintColor: stylesVar.toolbarTitle.color, headerStyle:{...stylesVar.toolbar}
        }}>
            <StackWalkthrough.Screen name='Welcome' component={Pages.Welcome} options={{headerShown:false}} />
            <StackWalkthrough.Screen name='Report' component={Pages.Report} options={{headerShown:false}} />
            <StackWalkthrough.Screen name='Called' component={Pages.Called} options={{headerShown:false}} />        
            <StackWalkthrough.Screen name='Options' component={Pages.Options} options={{headerShown:false}} />
        </StackWalkthrough.Navigator>
    )
}

export { Walkthrough }