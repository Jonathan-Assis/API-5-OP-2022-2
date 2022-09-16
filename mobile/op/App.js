import React from "react";
import { StatusBar } from 'react-native'
import stylesVar from './src/styles/stylesVar'
import Routes from './src/routes'

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={stylesVar.toolbar.backgroundColor} />
      <Routes />
    </>
  );
};

export default App;