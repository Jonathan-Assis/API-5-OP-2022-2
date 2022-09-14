import React from 'react';
import { View, Text, Image, SafeAreaView,Button} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native'

const Start_Screen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.body} >
      <Image
        style={styles.logotype}
        source={require('../../assets/Icons/OP.png')}/>
      <Text style={styles.logotext}>OP</Text>
      <Button
      title="Ir para Termos de Uso"
      onPress={() => navigation.navigate('User_Term')}/>
      </View>
    </SafeAreaView>
  )}
  export default Start_Screen;