import React, {useState} from 'react';
import { View, TextInput,Text,TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import styles from './styles';
import {useNavigation} from '@react-navigation/native'
import LogoOP from '../../assets/Logotype/LogoOP.svg'

const Welcome = () => {
  const navigation = useNavigation();
  
  return (
<View>

</View>
  );
}

const Report = () => {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoOP  style={styles.hLogotype} />
        <Text style={styles.hTitle}>teste</Text>
      </View>

      <View style={styles.body}> 
        <View style={styles.bForm}> 
          <Text style={styles.bDescription}>teste</Text> 
          <View style={styles.footer}>
                    
          <TouchableOpacity style={styles.bButtonPrevious}
          >        
            <Text style={styles.bLabelPrevious}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bButtonNext}
            onPress={() => navigation.navigate('Called') }
            >    
            <Text style={styles.bLabelNext}>Próximo</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
const Called = () => {
  const navigation = useNavigation();
  return(
    <View>

    </View>

  )
}

const Options = () => {
  const navigation = useNavigation();
  return(
    <View>

    </View>

  )
}


export {Welcome, Report, Called, Options};