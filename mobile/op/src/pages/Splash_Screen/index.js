import React from 'react';
import { Image, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Start_Screen = () =>{
  const navigation = useNavigation();

  setTimeout(() =>{
    navigation.navigate('Sign_In')
  }, 1200)


  return(
    <View style={styles.container}>
      <Image source={require('../../assets/Logotype/OP.png')} style={styles.header}/>
      <Text style={styles.body}>Ocorrências Públicas</Text>
    </View>
  )
}

export default Start_Screen;