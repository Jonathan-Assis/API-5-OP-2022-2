import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../contexts/Auth'
import { AuthRoutes } from './AuthRoutes'
import { AppRoutes } from './AppRoutes'
import { Loading } from '../components'
import { Walkthrough } from './Walkthrough'

/* 
{ authData ? <Walkthrough /> : <AuthRoutes />}
*/
export function Routes () {
    const {authData, loading} = useAuth()
    return (
        <NavigationContainer>
            <Loading loading={loading}>
            { authData ? <AppRoutes /> : <AuthRoutes />}
            </Loading>
        </NavigationContainer>
    )
}
