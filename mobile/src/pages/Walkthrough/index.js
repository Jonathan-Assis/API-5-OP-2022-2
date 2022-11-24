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
        <Text style={styles.hTitle}>Reportar Ocorrência</Text>
      </View>

      <View style={styles.body}> 
        <View style={styles.bContainer}> 
          <Text style={styles.bTitle}>Boas Vindas</Text> 
          <Text style={styles.bDescription}>
            1. Primeiro selecionar  o principal problema

            2. Selecionar a Foto do Ocorrido

            3. Selecionar a causa

            4. Informar um titulo da Ocorrência

            5. Selecionar a localização do Ocorrido

            6. Descrever o ocorrido

            7. Finalizar a Ocorrência</Text> 

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
        <Text style={styles.hTitle}>Chamados</Text>
      </View>

      <View style={styles.body}> 
        <View style={styles.bContainer}> 
          <Text style={styles.bTitle}>Está Tela  é para exibir seus chamados abertos e visualizar os outros chamados da região</Text> 
          <Text style={styles.bDescription}>É esperado que possa ser visualizado o status da Ocorrência como por exemplo: se ele já foi executado ou não, contribuir com uma ocorrência em aberto, editar a ocorrência e excluir a ocorrência  </Text> 

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
        <Text style={styles.hTitle}>Tela de Opções </Text>
      </View>

      <View style={styles.body}> 
        <View style={styles.bContainer}> 
          <Text style={styles.bTitle}>Está Tela  é para exibir as demais informações </Text> 
          <Text style={styles.bDescription}>Na pagina de opções você  poderá visualizar seus dados,editar seus dados cadastrais como por ex:alterar o nome, adicionar uma foto, visualizar novamente o tutorial e sair da conta.  </Text> 

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