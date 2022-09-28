import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native'
import { useAuth } from '../../contexts/Auth'

import MegaphoneIcon from '../../assets/Icons/megaphone-fill';

const Sign_In = () => {
  const navigation = useNavigation();
  const [cpf,setCpf]=useState('')
  const [senha, setSenha]=useState('')

  const { signIn } = useAuth()   

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MegaphoneIcon size={120} fill='white' />
        <Text style={styles.hTitle}>Ocorrências Públicas</Text>
      </View>

      <View style={styles.body}> 
        <View style={styles.bForm}> 
          <Text style={styles.bDescription}>O acesso a este aplicativo é feito através do uso do CPF</Text>  
          <View style={styles.bInput}>
            <Text style={styles.bTitle}>CPF</Text>  
            <TextInput style={styles.bInputBox}
              placeholder="000.000.000-00" 
              maxLength={11}
              keyboardType='numeric'
              value={cpf}
              onChangeText={setCpf}
            ></TextInput>
          </View>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Senha</Text>
            <TextInput style={styles.bInputBox}
              placeholder="Insira a sua senha" 
              secureTextEntry={true}
              value={senha} 
              onChangeText={setSenha}
            ></TextInput>  
          </View>
          
          <TouchableOpacity style={styles.bButton}
            onPress={() => signIn(cpf,senha)}
            >    
            <Text style={styles.bLabel}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bButton}
            onPress={() => navigation.navigate('Sign_Up') }
            >    
            <Text style={styles.bLabel}>Não tenho Cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Sign_In;