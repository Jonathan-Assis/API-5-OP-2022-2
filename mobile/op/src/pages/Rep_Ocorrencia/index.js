import React, {useEffect, useState} from 'react';
import { View, Text,TextInput,TouchableOpacity, ScrollView} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import ServerConnection from '../../services'
import styles from './styles';

import FileIcon from '../../assets/Icons/paperclip'

const Rep_Ocorrencia = (props) => {
  const [tipo,setTipo]=useState('')
  const [cpf,setCpf]=useState('')
  const [titulo,setTitulo]=useState('')
  const [arquivo,setArquivo]=useState({})
  const [descricao,setDescricao]=useState('')
  const [ loading, setLoading ] = useState(false);

  const [subType,setSubType] = useState([]); 

  let TipoOcorrencia = props.route.params?.TipoOcorrencia


useEffect(() =>{
  if(TipoOcorrencia == 'Elétrico'){
    setSubType(['Poste de Luz','Queda do poste','Fiação em curto'])
  } 
  if(TipoOcorrencia == 'Pavimentação'){
    setSubType(['Buraco no asfalto','Buraco na calçada'])
  }
  if(TipoOcorrencia == 'Natureza'){
    setSubType(['Árvore caída','Árvore com risco de queda'])
  }
  else{
    setSubType(['Foça aberta'])
  }
},[TipoOcorrencia])












  const [local,setLocal]=useState({lat:0,long:0})

  const [selectedSubType, setSelectedSubType] = useState([]);

  const newOcorrencia = () => {
    /* if(titulo !== '' && descricao !== '') {
        setLoading(true);
        ServerConnection.ocorrencia({
            cpf, titulo, categoria:selectedType,foto:arquivo, descricao, local
        }).then(data => 
            console.log(data.response)//mudar depois
        ).finally(() => {
            setLoading(false);
        });
    } */
}

  return (
  <ScrollView>
      <View style={styles.container}>
        <View style={styles.body}> 

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Título:</Text>  
            <TextInput style={styles.bInputStrokeBox} 
              onChangeText={setTitulo}
              value={titulo}
              placeholder='Título da Ocorrência'
              placeholderTextColor={styles.bInputStrokeBox.color}
            ></TextInput>
          </View>

          <TouchableOpacity style={styles.bPickerBox}>
                <Picker
                  style={styles.bPickerTitle}
                  selectedValue={selectedSubType}
                  onValueChange={(itemValue, index) =>
                    setSelectedSubType(itemValue, index)
                  }
                >
                  {subType.map((subType, index) => {
                    return (
                      <Picker
                        style={{ flex: 1 }}
                        label={subType}
                        value={subType}
                        key={index}
                      />
                    );
                  })}
                </Picker>
              </TouchableOpacity>

          <TouchableOpacity style={styles.bArquivo}>
              <Text style={styles.bTitle}>Adicionar Foto</Text>
              <FileIcon size={23}/> 
          </TouchableOpacity>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Ocorrido:</Text>  
            <TextInput style={styles.bInputBox} 
              placeholder='Descrição do Problema'
              multiline={true}
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