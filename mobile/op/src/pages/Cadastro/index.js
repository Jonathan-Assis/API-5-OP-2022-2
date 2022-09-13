import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';

const Cadastro = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
          <Text style={styles.bText}>Cadastro</Text>  
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text>Ir para Home</Text>
          </TouchableOpacity>
      </View>
    );
  }
  
  export default Cadastro