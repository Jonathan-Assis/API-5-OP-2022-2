import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { View, Text,Button,} from 'react-native';
import styles from './styles';


const Log_In = () => {
  const navigate = useNavigation()
  return (
    <View style={styles.container}>
        <Text style={styles.bText}>Página de Login</Text>  
          <Text>Em desenvolvimento!</Text>
          <Button
              onPress={()=>navigate.navigate("Cadastro")}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
/>
    </View>
  );
}

export default Log_In;

