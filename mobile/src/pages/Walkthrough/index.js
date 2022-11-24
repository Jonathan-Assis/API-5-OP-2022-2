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
        <View style={styles.bContainer}> 
          <Text style={styles.bTitle}>Titulo sobre o walkthrough</Text> 
          <Text style={styles.bDescription}>Descrição sobre o walkthrough</Text> 

          <View style={styles.bButtons}>        
            <TouchableOpacity style={styles.bButtonPrevious}
              //onPress={() => navigation.navigate('') }
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
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoOP  style={styles.hLogotype} />
        <Text style={styles.hTitle}>teste</Text>
      </View>

      <View style={styles.body}> 
        <View style={styles.bContainer}> 
          <Text style={styles.bTitle}>Titulo sobre o walkthrough</Text> 
          <Text style={styles.bDescription}>Descrição sobre o walkthrough</Text> 

          <View style={styles.bButtons}>        
            <TouchableOpacity style={styles.bButtonPrevious}
              onPress={() => navigation.navigate('Report') }
            >        
              <Text style={styles.bLabelPrevious}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bButtonNext}
              onPress={() => navigation.navigate('Options') }
            >    
              <Text style={styles.bLabelNext}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const Options = () => {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoOP  style={styles.hLogotype} />
        <Text style={styles.hTitle}>teste</Text>
      </View>

      <View style={styles.body}> 
        <View style={styles.bContainer}> 
          <Text style={styles.bTitle}>Titulo sobre o walkthrough</Text> 
          <Text style={styles.bDescription}>Descrição sobre o walkthrough</Text> 

          <View style={styles.bButtons}>        
            <TouchableOpacity style={styles.bButtonPrevious}
              onPress={() => navigation.navigate('Called') }
            >        
              <Text style={styles.bLabelPrevious}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bButtonNext}
              //onPress={() => navigation.navigate('Called') }
            >    
              <Text style={styles.bLabelNext}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}


export {Welcome, Report, Called, Options};