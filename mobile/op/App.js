import React from "react";
import { StatusBar } from 'react-native'
import stylesVar from './src/styles/stylesVar'
import Routes from './src/routes'
import User_Term from './src/pages/User_Term'
import Start_Screen from './src/pages/Start_Screen'

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={stylesVar.toolbar.backgroundColor} />
      <Start_Screen />
    </>
  );
};

export default App;