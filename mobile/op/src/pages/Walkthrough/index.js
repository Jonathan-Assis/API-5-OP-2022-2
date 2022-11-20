import React from 'react';
import { Image, View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Walkthrough = () =>{
  const navigation = useNavigation();


  return(
    <View style={styles.container}>
      <Image source={require('../../assets/Logotype/OP.png')} style={styles.header}/>
      <Text style={styles.body}>Ocorrências Públicas</Text>
    <Text style={styles.body}> Este é um tutorial e poderá ser revisto na aba de opções </Text>
    <Button style={styles.proximo}> Próximo</Button>
    <Button style={styles.finalizar}> Finalizar</Button>
    </View>
  )

}

export default Walkthrough;

