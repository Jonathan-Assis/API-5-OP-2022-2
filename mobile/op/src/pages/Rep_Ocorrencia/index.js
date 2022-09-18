import React, {useState} from 'react';
import { View, Text,TextInput,TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';

import ProfileIcon from '../../assets/Icons/paperclip'

const Rep_Ocorrencia = () => {
  const [cpf,setCpf]=useState('')
  const [arquivo,setArquivo]=useState({})
  const [descricao,setDescricao]=useState('')
  
  return (
  <ScrollView>
      <View style={styles.container}>
        <View style={styles.body}> 

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Identificação</Text>  
            <TextInput style={styles.bInputStrokeBox} 
              placeholder='000.000.000-00'
              maxLength={8}
              keyboardType='numeric'
            ></TextInput>
          </View>

          <View style={styles.bArquivo}>
              <Text style={styles.bTitle}>Adicionar Foto</Text>
              <Text style={styles.bTitle}>Número</Text> 
          </View>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Ocorrido:</Text>  
            <TextInput style={styles.bInputBox} 
              placeholder='Descrição do Problema'
            ></TextInput>  
          </View>  
               
          <TouchableOpacity style={styles.bButton}
          onPress={() => {
          }}>
          <Text style={styles.bLabel}>Continuar</Text>
          </TouchableOpacity >

        </View>
      </View>
    </ScrollView>
  );
}

export default Rep_Ocorrencia;