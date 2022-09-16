import React, {useState} from 'react';
import { View, Text,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles';
import RNFS from 'react-native-fs';
import FileBase64 from 'react-file-base64';

import PaperclipIcon from '../../assets/Icons/paperclip'

const Rep_Ocorrencia = () => {
  /*const [base64, setBase64] = useState('')*/
  const [cpf,setCpf]=useState('')
  const [arquivo,setArquivo]=useState({})
  const [descricao,setDescricao]=useState('')
  console.log(descricao)

  RNFS.readFile(this.state.imagePath, 'base64')
.then(res =>{
  console.log(res);
});
/*   setArquivo (pipi popopó) = 64 bits    */

  return (


    <View style={styles.container}>
      <View style={styles.body}>
          <Text style={styles.bText}>Identificação</Text>
          <View style={styles.bInputStroke}>
            <TextInput style={styles.bInputStrokePlaceholder} 
              placeholder="000.000.000-00"
              keyboardType='numeric'
              onChangeText={setCpf}
              ></TextInput> 

          <FileBase64
          multiple={true}
          onDone={ this.getFiles.bind(this)}/>
          

          </View>
          <View style={styles.bRow}>         
            <Text style={styles.bText}>Adicionar Arquivo</Text>
            <PaperclipIcon size='20'/>
          </View>
          <View style={styles.bInputBox}>
            <TextInput style={styles.bInputBoxPlaceHolder}
              placeholder="Descrição do Problema"
              onChangeText={setDescricao}
            ></TextInput>
          </View>   
          <TouchableOpacity
            style={styles.bButton}>
            <Text style={styles.bButtonLabel}>Continuar</Text>
          </TouchableOpacity>          
      </View>
    </View>
  );
}

export default Rep_Ocorrencia;