import React,{useState} from 'react';
import { View, Text,TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles';
import ProfileIcon from '../../assets/Icons/file-person'

const Edit_Profile = () => {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");

  async function searchCEP(cep) {
     await fetch(`https://viacep.com.br/ws/${cep}/json/`)
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
        <View style={styles.body} > 

          <View style={styles.bImage}>
            <ProfileIcon size={120} />
          </View>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Nome</Text>  
            <TextInput style={styles.bInputBox} placeholder='Nome Completo'></TextInput>
          </View>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>CPF</Text>
            <TextInput style={styles.bInputBox} placeholder='Insira seu CPF'></TextInput>  
          </View>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Endereço</Text>
          </View>
          
          <View style={styles.bEndereço}>
            <View style={styles.bEndereçoBox}>
              <Text style={styles.bTitle}>CEP</Text>
              <TextInput style={styles.bInputBox}
                maxLength={8}
                placeholder="00000-000"
                keyboardType='numeric'
                onChangeText={setCep}
                value = {cep}
              ></TextInput>
            </View>

            <View style={styles.bEndereçoBox}>
              <Text style={styles.bTitle}>Número</Text>
              <TextInput style={styles.bInputBox} 
                placeholder='000'
                keyboardType='numeric'
              ></TextInput>  
            </View>    
          </View>

          <TouchableOpacity style={styles.bButton}
            onPress={() => {
            searchCEP(cep)
          }}>
            <Text style={styles.bLabel}>Confirmar Endereço</Text>
          </TouchableOpacity>
          
          <Text style={styles.bTitle}>Logradouro: {logradouro}</Text>
          <Text style={styles.bTitle}>Bairro: {bairro}</Text>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Senha</Text>  
            <TextInput style={styles.bInputBox} 
              placeholder='Insira sua Senha'
              secureTextEntry={true}
            ></TextInput>  
          </View>  
           
          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Confirmar Senha</Text>  
            <TextInput style={styles.bInputBox}
              placeholder='Insira novamente a Senha'
              secureTextEntry={true}
            ></TextInput>  
          </View>          
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