import React,{useState} from 'react';
import { View, Text,TextInput, TouchableOpacity, ScrollView } from 'react-native';
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
    <ScrollView>
      <View style={styles.container}>
        <ProfileIcon size={120} />
        <View style={styles.body} > 
          <Text style={styles.bText}>Nome</Text>  
          <TextInput style={styles.bInputBox} placeholder='Nome Completo'></TextInput> 
          <Text style={styles.bText}>CPF</Text>  
          <TextInput style={styles.bInputBox} placeholder='Insira seu CPF'></TextInput>  
          <Text style={styles.bText}>Endereço</Text>
          <View style={styles.bCEP}>
          <View>
            <Text style={styles.bText}>CEP</Text>
            <TextInput style={styles.bInputBox}
              maxLength={8}
              placeholder="00000-000"
              keyboardType='numeric'
              onChangeText={setCep}
              value = {cep}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.bText}>Número</Text>
            <TextInput style={styles.bInputBox} placeholder='000'></TextInput>  
          </View>
          </View>
          <TouchableOpacity onPress={() => {
            searchCEP(cep)
          }}>
          <Text style={styles.bText}>Confirmar CEP</Text>
          </TouchableOpacity>
          <Text style={styles.bText}>{logradouro}</Text>
          <Text style={styles.bText}>{bairro}</Text>
          <Text style={styles.bText}>Senha</Text>  
          <TextInput style={styles.bInputBox} placeholder='Insira sua Senha'></TextInput>  
          <Text style={styles.bText}>Confirmar Senha</Text>  
          <TextInput style={styles.bInputBox} placeholder='Insira novamente a Senha'></TextInput>  
          <TouchableOpacity style={styles.bButton}
          onPress={() => {
          }}>
          <Text style={styles.bLabel}>Salvar Alterações</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.bButton}
          onPress={() => {
          }}>
          <Text style={styles.bLabel}>Deletar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Edit_Profile;