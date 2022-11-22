import 'react-native-gesture-handler'
import React from "react";
import { StatusBar, SafeAreaView } from 'react-native'
import stylesVar from './src/styles/stylesVar'
import {Routes} from './src/routes'
import { AuthProvider } from './src/contexts/Auth'

const App = () => {
  return (
    <>
      <AuthProvider>
        <SafeAreaView style={{flex:1}}>
          <StatusBar barStyle='light-content' backgroundColor={stylesVar.toolbar.backgroundColor} />
          <Routes />
        </SafeAreaView>
      </AuthProvider>
    </>
  );
};

export default App;