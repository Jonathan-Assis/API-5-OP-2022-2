import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';

const Reports = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.bText}>Ocorrências</Text>  
        <TouchableOpacity onPress={() => navigation.navigate('User_Term')}>
          <Text>Ir para as Ocorrências</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Home