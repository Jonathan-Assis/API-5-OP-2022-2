import 'react-native-gesture-handler'
import './src/lib/dayjs'
import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import { Colors } from './src/styles'
import { Routes } from './src/routes'
import { AuthProvider } from './src/contexts/Auth'

const App = () => {
  return (
    <>
      <AuthProvider>
        <SafeAreaView style={{flex:1}}>
          <StatusBar barStyle='light-content' backgroundColor={Colors.purplePrimary} />
          <Routes />
        </SafeAreaView>
      </AuthProvider>
    </>
  );
};

export default App;