import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../contexts/Auth'
import { AuthRoutes } from './AuthRoutes'
import { AppRoutes } from './AppRoutes'
import { Loading } from '../components'
import { Walkthrough } from './Walkthrough'

export function Routes () {
    const {authData, loading} = useAuth()
    return (
        <NavigationContainer>
            <Loading loading={loading}>
            { authData ? <Walkthrough /> : <AuthRoutes />}
            {/* { authData ? <AppRoutes /> : <AuthRoutes />} */}
            </Loading>
        </NavigationContainer>
    )
}
