import React from 'react';
import stylesVar from '../styles/stylesVar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import User_Term from '../pages/User_Term'
import Home from '../pages/Home'

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='User_Term'>
                <Stack.Screen name='User_Term' component={User_Term} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;