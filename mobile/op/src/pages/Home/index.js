import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';

//Icons
import FormIcon from '../../assets/Icons/journal-richtext'
import MegaphoneIcon from '../../assets/Icons/megaphone'


const Home = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    const resp = conn.login({ cpf: "219837423", senha: "senha123" });
    console.log(resp)


    /* ServerConnection.login({ cpf: "219837423", senha: "senha123" })
    .then(res => console.log(res))
    .catch(e => console.error({...e})) */
  }, [])

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
            
          <View style={styles.bColumn}>
            <TouchableOpacity style={styles.bButton} onPress={() => navigation.navigate('Chamados')}>
              <FormIcon size="50" />
              <Text style={styles.bButtonTitle}>Conferir Chamados</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  );
}

export default Home