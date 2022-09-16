import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';

//Icons
import MegaphoneIcon from '../../assets/Icons/megaphone'

import ServerConnection from '../../services';

const Home = () => {
  const navigation = useNavigation();
  /* console.log('olá')
  ServerConnection.login({ cpf: "219837423", senha: "senha123" })
  .then(({data}) => console.log(JSON.stringify(data))); */

  useEffect(() => {
    /* ServerConnection.login({ cpf: "219837423", senha: "senha123" })
    .then(res => console.log(res))
    .catch(e => console.error({...e})) */
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

        <TouchableOpacity
          onPress={() => 
            navigation.navigate('Cadastro')
          }
        >
          <Text>Para o Cadastro (testes)</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

export default Home