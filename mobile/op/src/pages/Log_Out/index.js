import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';


const Log_Out = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logotype/OP.png')} style={styles.bLogotype}/>
        <Text style={styles.bText}>Página de Sair da Conta</Text>  
        <Text style={styles.bText}>Em desenvolvimento!</Text>
    </View>
  );
}

export default Log_Out;