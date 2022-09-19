import 'react-native-gesture-handler'
import React from "react";
import { StatusBar } from 'react-native'
import stylesVar from './src/styles/stylesVar'
import {Routes} from './src/routes'
import { AuthProvider } from './src/contexts/Auth'

const App = () => {
  return (
    <>
      <AuthProvider>
        <StatusBar barStyle='light-content' backgroundColor={stylesVar.toolbar.backgroundColor} />
        <Routes />
      </AuthProvider>
    </>
  );
};

export default App;