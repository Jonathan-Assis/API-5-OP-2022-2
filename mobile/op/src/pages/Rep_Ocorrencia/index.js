import React, {useEffect, useState} from 'react';
import { View, Text,TextInput,TouchableOpacity, ScrollView, Alert, Image} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import {useNavigation} from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import ServerConnection from '../../services'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapLocationDot, faImage, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './styles';

import FileIcon from '../../assets/Icons/paperclip'
import { useRoute } from '@react-navigation/native';
import { text } from '@fortawesome/fontawesome-svg-core';




const Rep_Ocorrencia = (props) => {
  const navigation = useNavigation();
  const route = useRoute()
  const [tipo,setTipo]=useState('')
  const [cpf,setCpf]=useState('')
  const [titulo,setTitulo]=useState('')
  const [arquivo,setArquivo]=useState({})
  const [descricao,setDescricao]=useState('')
  const [ loading, setLoading ] = useState(false);
  const [mapSelected, setMapSelected] = useState(true);

  const [subType,setSubType] = useState([]); 

  let TipoOcorrencia = props.route.params?.TipoOcorrencia
  let Mapa = props.route.params?.map
  
  useEffect(()=>{
    ServerConnection.categorias({}).then ((data)=>(setSubType(JSON.parse(data))))
    tipoPrincipal()
  },[])


 
  function tipoPrincipal(props){
    switch(TipoOcorrencia) {

      case 'Eletricidade':
        return setSubType(subType['Eletricidade'['subCategorias']])
        break

        case 'Pavimentação':
        return setSubType(['Buraco','Sem asfalto'])
        break

      case 'Natureza':
        return setSubType(['Árvore caída','Árvore com risco de queda','Raizes na rua'])
        break

      case 'Esgoto':
        return setSubType(['Foça aberta', 'Esgoto aberto', 'Caixa de Esgoto vazando'])
        break
      case 'Outros':
        return setSubType(null)
        break

      default:
        Alert.alert("Aviso","Categoria não encontrada");        
      }
    }


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

const [hasGalleryPermission,setHasGalleryPermission]=useState(null)
const [image,setImage] = useState(null)

useEffect(()=>{
  (async ()=>{
    const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
    setHasGalleryPermission(galleryStatus.status === 'granted')
  })()
},[])

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    base64: true,
    aspect: [100,100],
    quality:1,
  });

  console.log(result)
  if(!result.cancelled){
    setImage(result.uri);
  }
}

if (hasGalleryPermission === false){
  return Alert.alert('Permissão Negada!','A Permissão da galeria foi negada.')
}

  return (
  <ScrollView>
    <View style={styles.container}>
      { image ?
        <TouchableOpacity style={styles.header}
          onPress={()=> setImage(null)}
        >
          <Text style={styles.hTitle}>Imagem do Ocorrido.</Text>  
          <Image source={{uri:image}} style={{width:150, height:150}}/>
        </TouchableOpacity>
      :
        <TouchableOpacity style={styles.header}
        onPress={()=> pickImage()}
        >
          <View style={styles.hImage}>
            <FontAwesomeIcon icon={faImage} size={150} color='black' />
            <Text style={styles.hTitle}>Selecione ou tire uma Foto.</Text>  
        </View>
        </TouchableOpacity>
      }

        <View style={styles.body}> 
          <View style={styles.bContainer}> 

            { !!subType ? (<>
              <Text style={styles.bTitle2}>{TipoOcorrencia}</Text> 
              <Text style={styles.bTitle}>Selecione o Principal Motivo:</Text> 
              <TouchableOpacity style={styles.bPickerBox}> 
              <Picker
                style={styles.bPickerTitle}
                selectedValue={selectedSubType}
                onValueChange={(itemValue, index) =>
                  setSelectedSubType(itemValue, index)
                }
              >
                {subType.map((subType, index) =>
                  {
                    return (
                      <Picker
                        style={{ flex: 1 }}
                        label={subType}
                        value={subType}
                        key={index}
                      />
                    );
                  })
                }
              </Picker>
            </TouchableOpacity>
            </>)
            : (<>
           <Text style={styles.bTitle2}>{TipoOcorrencia}</Text> 
            </>)
            }

            <View style={styles.bInput}>
              <Text style={styles.bTitle}>Título:</Text>  
              <TextInput style={styles.bInputStrokeBox} 
                onChangeText={setTitulo}
                value={titulo}
                placeholder='Título da Ocorrência'
                placeholderTextColor={styles.bInputStrokeBox.color}
              ></TextInput>
            </View>
            { mapSelected ?
              <TouchableOpacity style={styles.bButtonMap}
              onPress={() =>  {
                navigation.navigate({
                  name: 'Maps',
                  params: {
                    idPage: route.name
                  }
              })
              }}>
              <FontAwesomeIcon icon={faMapLocationDot} size={30} color='white' />
              <Text style={styles.bButtonMapLabel}>Selecionar o Local</Text>  
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.bButtonMapSelected}
              onPress={() =>  {
                navigation.navigate({
                  name: 'Maps',
                  params: {
                    idPage: route.name
                  }
              })
              }}>
              <FontAwesomeIcon icon={faCircleCheck} size={30} color='black' />
              <Text style={styles.bButtonMapLabelSelected}>Local Selecionado!</Text>  
            </TouchableOpacity>
            }

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
            <Text style={styles.bLabel}>Finalizar Ocorrência</Text>
            </TouchableOpacity >

          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Rep_Ocorrencia;