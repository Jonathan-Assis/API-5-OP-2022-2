import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// Routes
import { AuthRoutes } from './AuthRoutes'
import { AppRoutes } from './AppRoutes'

import { useAuth } from '../contexts/Auth'
import { Loading } from '../components'

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
