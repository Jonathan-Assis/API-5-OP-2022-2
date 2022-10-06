import React,{useState} from 'react';
import { View, Text,TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { Loading } from '../../components'
import ServerConnection from '../../services';
import { useAuth } from '../../contexts/Auth'
import styles from './styles';

const Edit_Profile = () => {
  const authData = JSON.parse(useAuth().authData);
  const { updateAuth, deleteAuth } = useAuth();

  const [ data, setData ] = useState({
    id: authData._id || undefined,
    nome: authData.nome || undefined,
    email: authData.email || undefined,
    cpf: authData.cpf || undefined,
    senha: undefined,
    confSenha: undefined
  });

  const update = async () => {
    const { id, nome, email, cpf, senha, confSenha } = data;
    if(senha === confSenha) {
      if(!!nome && !!email && !!cpf) {
        let aux = !!senha ? senha : authData.senha;
        updateAuth({
          id, nome, email, cpf, senha: aux
        });
      }
      else Alert.alert('Falha ao editar o Perfil', 'Informe um Nome, Email e CPF');
    }
    else Alert.alert('Falha ao editar o Perfil', 'Senhas diferentes');
  }

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
              placeholder='Insira sua nova Senha'
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