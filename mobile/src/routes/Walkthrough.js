import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import stylesVar from '../styles/stylesVar'

import * as Pages from '../pages'

const StackWalkthrough = createStackNavigator()

const Walkthrough = () => {
    return(
        <StackWalkthrough.Navigator initialRouteName='Welcome' screenOptions={{
            headerTitleAlign: 'center', headerTintColor: stylesVar.toolbarTitle.color, headerStyle:{...stylesVar.toolbar}
        }}>
            <StackWalkthrough.Screen name='Welcome' component={Pages.Welcome} options={{headerShown:false}} />
        </StackWalkthrough.Navigator>
    )
}

export { Walkthrough }