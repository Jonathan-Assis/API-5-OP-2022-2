import React, {useEffect, useState} from 'react';
import { View, Text,TextInput,TouchableOpacity, ScrollView, Alert, Image} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import {useNavigation} from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import ServerConnection from '../../services'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapLocationDot, faImage, faCircleCheck, IconDefinition, faCamera } from '@fortawesome/free-solid-svg-icons'
import styles from './styles';

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
  const [loading, setLoading ] = useState(false);
  const [mapSelected, setMapSelected] = useState(false);

  const [subType,setSubType] = useState([]); 
  const [datas,setDatas] = useState([]);

  let TipoOcorrencia = props.route.params?.TipoOcorrencia
  let Mapa = props.route.params?.map
  let coordinate = props.route.params?.coordinate
  
  useEffect(()=>{
    setLoading (true)
    ServerConnection.categorias({}).then (({data}) => 
    {
      setDatas(data/* JSON.parse(data) */)
    }).finally (()=>{
      setLoading (false)
    })
  },[TipoOcorrencia])

   //Busca de subCategoria
   useEffect(() => {
   if(TipoOcorrencia !== "Outros")
   {
   datas.map(categoria =>
  {
    if (categoria.tipo===TipoOcorrencia)
      {
        setSubType
        (
          categoria.subCategorias
        )
      }
    else  
      Alert.alert("Aviso","Categoria não encontrada"); 
    return categoria
  })}  },[])

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


const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    base64: true,
    aspect: [100,100],
    quality:1,
  });

  if(!result.cancelled){
    setImage(result.uri);
  }
}

if (hasGalleryPermission === false){
  Alert.alert('Permissão Negada!','A Permissão da galeria foi negada.')
  navigation.navigate('Home');
}

  return (
  <ScrollView style={styles.container}>
      { image ?
        <TouchableOpacity style={styles.header}
          onPress={()=> setImage(null)}
        >
          <Text style={styles.hTitle}>Imagem do Ocorrido.</Text>  
          <Image source={{uri:image}} style={{width:150, height:150}}/>
        </TouchableOpacity>
      :
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <TouchableOpacity style={styles.header}
        onPress={()=> pickImage()}
        >
          <View style={styles.hImage}>
            <FontAwesomeIcon icon={faImage} size={80} color='black'></FontAwesomeIcon>
            <Text style={styles.hTitle}>Selecionar foto</Text>  
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.header}
        onPress={()=> pickImage()}
        >
          <View style={styles.hImage}>
            <FontAwesomeIcon icon={faCamera} size={80} color='black' />
            <Text style={styles.hTitle}>Tirar uma Foto</Text>  
        </View>
        </TouchableOpacity>
        </View>
      }

        <View style={styles.body}> 
          <View style={styles.bContainer}> 

            { !!subType ? (<>
              <Text style={styles.bTitle2}>{TipoOcorrencia}</Text> 
              <Text style={styles.bTitle}>Selecione o Principal Motivo:</Text> 
              <TouchableOpacity style={styles.bPickerBox}> 
              <Picker
                style={styles.bPickerTitle}
                dropdownIconColor={styles.bPickerBox.borderColor.valueOf()}
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
                multiline={true}
                numberOfLines={1}
                onChangeText={setTitulo}
                value={titulo}
                placeholder='Título da Ocorrência'
                placeholderTextColor={styles.bInputStrokeBox.color}
              ></TextInput>
            </View>
            
            
             <TouchableOpacity style={!!props.route.params?.coordinate ? styles.bButtonMapSelected : styles.bButtonMap}
              onPress={() =>  {
                navigation.navigate({
                  name: 'Maps',
                  params: {
                    idPage: route.name
                  }
              })
              }}>
                {!!props.route.params?.coordinate ? (<>
                  <FontAwesomeIcon icon={faCircleCheck} size={30} color='black' />
                  <Text style={styles.bButtonMapLabelSelected}>Local Selecionado!</Text>  
                    </>
                  )
                  : 
                  (
                  <>
                    <FontAwesomeIcon icon={faMapLocationDot} size={30} color='white' />
                    <Text style={styles.bButtonMapLabel}>Selecionar o Local</Text>  
                  </>)
                }
            </TouchableOpacity>
             
            <View style={styles.bInput}>
              <Text style={styles.bTitle}>Sobre o ocorrido:</Text>  
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
    </ScrollView>
  );
}

export default Rep_Ocorrencia;