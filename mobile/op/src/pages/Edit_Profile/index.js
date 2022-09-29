import React,{useState} from 'react';
import { View, Text,TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import styles from './styles';
import ProfileIcon from '../../assets/Icons/file-person'

const Edit_Profile = () => {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.body} > 

          <View style={styles.bImage}>
            <FontAwesomeIcon icon={ faImage } size={140} color={'black'}/>
          </View>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Nome</Text>  
            <TextInput style={styles.bInputBox} placeholder='Nome Completo'/>
          </View>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>CPF</Text>
            <TextInput style={styles.bInputBox} placeholder='Insira seu CPF'/>  
          </View>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Senha</Text>  
            <TextInput style={styles.bInputBox} 
              placeholder='Insira sua Senha'
              secureTextEntry={true}
            />
          </View>  
           
          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Confirmar Senha</Text>  
            <TextInput style={styles.bInputBox}
              placeholder='Insira novamente a Senha'
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={styles.bButton}
            onPress={() => {
              console.log('me clickaram')
            }}
          >
            <Text style={styles.bLabel}>Salvar Alterações</Text>
          </TouchableOpacity >

          <TouchableOpacity style={styles.bButton}
            onPress={() => {
              console.log('me clickaram')
            }}
          >
            <Text style={styles.bLabel}>Deletar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Edit_Profile;