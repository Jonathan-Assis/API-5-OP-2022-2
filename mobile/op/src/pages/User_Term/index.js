import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';

const User_Term = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.bText}>Página de Termos de Uso</Text>  
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Ir para a tela inicial</Text>
        </TouchableOpacity>
    
    </View>
  );
}

export default User_Term;