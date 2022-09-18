import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { useAuth } from '../../contexts/Auth'

const Sign_In = () => {
  const [cpf,setCpf]=useState('')
  const [senha, setSenha]=useState('')


  const { signIn } = useAuth()

  return (
      <View style={styles.container}>
        <View style={styles.body} > 

          <View style={styles.bImage}>
          </View>

          <Text style={styles.bTitle}>O acesso a este aplicativo é feito através do CPF</Text>  
          <View style={styles.bInput}>
            <Text style={styles.bTitle}>CPF</Text>  
            <TextInput style={styles.bInputBox}
                placeholder="000.000.000-00" 
                maxLength={8}
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
          onPress={() => signIn(cpf,senha)}>    
            <Text style={styles.bLabel}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bButton}
          onPress={() => signIn(cpf,senha)}>    
            <Text style={styles.bLabel}>Não tenho Cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
export default Sign_In;