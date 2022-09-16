import React,{useState} from 'react';
import { View, Text,TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import ProfileIcon from '../../assets/Icons/file-person'

const Edit_Profile = () => {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");

  async function searchCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setLogradouro(res.logradouro);
      setBairro(res.bairro);
    })
    .catch((err) => {
      console.log(err)
  })}
  return (
    <View style={styles.container}>
      <ProfileIcon size={120} />
      <View style={styles.body} > 
      <View style={styles.bInput}>
        <Text style={styles.bText}>Nome</Text>  
        <TextInput style={styles.bText} placeholder='Nome Completo'></TextInput> 
        </View> 
        <Text style={styles.bText}>CPF</Text>  
        <TextInput style={styles.bText} placeholder='Insira seu CPF'></TextInput>  
        <Text style={styles.bText}>Endereço</Text>
        <Text style={styles.bText}>CEP</Text>
        <TextInput
          maxLength={8}
          placeholder="00000-000"
          keyboardType='numeric'
          onChangeText={setCep}
          value = {cep}
        ></TextInput>
        <TouchableOpacity onPress={() => {
          searchCEP(cep)
        }}>
        <Text style={styles.bText}>Número</Text>
          <TextInput style={styles.bText} placeholder='000'></TextInput>  
        <Text style={styles.bText}>Obter Endereço</Text>
        <Text style={styles.bText}>{logradouro}</Text>
        <Text style={styles.bText}>{bairro}</Text>
        <Text style={styles.bText}>Senha</Text>  
        <TextInput style={styles.bText} placeholder='Insira sua Senha'></TextInput>  
        <Text style={styles.bText}>Confirmar Senha</Text>  
        <TextInput style={styles.bText} placeholder='Insira novamente a Senha'></TextInput>  
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
        }}>
        <Text style={styles.bText}>Salvar Alterações</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
        }}>
        <Text style={styles.bText}>Deletar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Edit_Profile;