import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';

//Icons
import MegaphoneIcon from '../../assets/Icons/megaphone'

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hTitle}>Bem vindo(a) ao Ocorrências Públicas!</Text>  
      </View>
      <View style={styles.body}>
        <Text style={styles.bTitle}>O que deseja fazer hoje?</Text>
        <View style={styles.bRow}>
          
          <View style={styles.bColumn}>
            <TouchableOpacity style={styles.bButton} onPress={() => navigation.navigate('Rep_Ocorrencia')}>
              <MegaphoneIcon size="50" />
              <Text style={styles.bButtonTitle}>Reportar Ocorrência</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

    </View>
  );
}

export default Home