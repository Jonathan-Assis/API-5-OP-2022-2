import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.bText}>Página Inicial</Text>  
        <TouchableOpacity onPress={() => navigation.navigate('User_Term')}>
          <Text>Ir para os Termos de Uso</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Home