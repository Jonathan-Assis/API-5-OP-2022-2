import React, {useEffect, useState} from 'react';
import { View, Text,TextInput,TouchableOpacity, ScrollView, Image} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import {useNavigation} from '@react-navigation/native'
import ServerConnection from '../../services'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapLocationDot, faImage, faCircleCheck, faTriangleExclamation, faXmark, faPlus,faLightbulb } from '@fortawesome/free-solid-svg-icons'
import {PopUpAlert,PopUpActions, BottomSheetImage, Loading} from '../../components'
import styles from './styles';
import * as Location from "expo-location";


import { useRoute } from '@react-navigation/native';
import { useAuth } from '../../contexts/Auth';

const Rep_Ocorrencia = (props) => {
  const navigation = useNavigation();
  const route = useRoute()
  const authData = JSON.parse(useAuth().authData)
  let cidadao = authData._id


  //form
  const [imagem,setImagem]=useState({})
  const [categoria, setCategoria]=useState()
  const [selectedSubType, setSelectedSubType] = useState([]);
  const [titulo,setTitulo]=useState('')
  const [local,setLocal]=useState({})
  const [localidade,setLocalidade]=useState({})
  const [geoCode,setGeoCode]=useState({})
  const [descricao,setDescricao]=useState('')

  const [loading, setLoading ] = useState(false);
  const [subType,setSubType] = useState([]); 
  const [datas,setDatas] = useState([]);
  
  let TipoOcorrencia = props.route.params?.TipoOcorrencia
  let coordinate = props.route.params?.coordinate
  let localizacao = props.route.params?.localidade
  
  //Define o tipo da ocorrência
  useEffect(()=>{
    setLoading(true)
    ServerConnection.categorias({})
    .then(({data}) => {
      setDatas(data)
    })
    .finally (() => {
      !!TipoOcorrencia && setCategoria(TipoOcorrencia)
      setLoading(false)
    })
  },[TipoOcorrencia])

   //Busca de subCategoria
   useEffect(() => {
   if(TipoOcorrencia !== "Outros")
   {
   datas.map(categoria =>
  {
    if (!!TipoOcorrencia && categoria.tipo === TipoOcorrencia)
      {
        setSubType
          (
            categoria.subCategorias
          )
      }
    return categoria
  })}  },[datas])

  //Define coordenadas
  useEffect(() => {
    if(coordinate !== undefined){
      let convertLatLng = {
        latitude:parseFloat(coordinate.latitude),
        longitude:parseFloat(coordinate.longitude)
      }
      setLocal(convertLatLng)
      setLocalidade(localizacao)
      }
    
  },[coordinate])
  
  var dataAtual = new Date()
const newOcorrencia = () => {
 if(imagem !== false && categoria !== '' && selectedSubType !== '' && titulo !== '' && local !== '' && descricao !== '' ) {
        setLoading(true);
        ServerConnection.ocorrencia({
          cidadao:cidadao, local: local, titulo: titulo, descricao: descricao, categoria:categoria, subCategoria: selectedSubType,  data:dataAtual,bairro:localidade?.bairro,
          imagem: imagem?.base64,
        }).then(result => {
          if(!!result) {
            console.log(!!result)//mudar depois
            setVisible(false);
          }
        }).finally(() => {
            setLoading(false);
        });
    } else {
      
    }
} 

const [visible,setVisible]=useState(false)
const [popUp, setPopUp] = useState({
  icon: undefined,
  title: undefined,
  description: undefined,
  buttonPrimaryTitle: undefined,
  buttonSecondaryTitle: undefined,
  onConfirm: ()=>{},
  onClose: ()=>{},
})

const close = () =>{
  setVisible(false)
}

const [imageModal,setImageModal] = useState(false)
const imageOptions = () => {
  setImageModal(true)
}

const [imageSelected,setImageSelected]=useState(false)

useEffect(() => {
  if( Object.keys(imagem).length === 0 || imagem.cancelled === true){
    setImageSelected(false)
  }
  else {
    setImageSelected(true)
  }
},[imagem])

  return (
    <>
{/*       <PopUpAlert
        icon={
          <FontAwesomeIcon icon={popUp.icon} size={60} color='white' />
        }
        title={popUp.title}
        description={popUp.description}
        buttonPrimaryTitle={popUp.buttonPrimaryTitle}
        onClose={popUp.onClose}
        visible={visible}
        setVisible={setVisible}
      /> */}
      <PopUpActions 
        icon={
          <Image source={require('../../assets/Logotype/LogoOP.png')} resizeMode='contain' style={styles.PopUpLogotype} />
        }
        title={popUp.title}
        description={popUp.description}
        buttonPrimaryTitle={popUp.buttonPrimaryTitle}
        buttonSecondaryTitle={popUp.buttonSecondaryTitle}
        onConfirm={popUp.onConfirm}
        onClose={popUp.onClose}
        visible={visible}
        setVisible={setVisible}
      />
      <Loading loading={loading}>
        <BottomSheetImage
          imagem={imagem}
          setImagem={setImagem}
          visible={imageModal}
          setVisible={setImageModal}
        />
        <ScrollView style={styles.container}>
          { !imageSelected ? 
            <TouchableOpacity style={styles.header}
              onPress={()=> imageOptions()}
            >
               <View style={styles.hImageIcon}>
                <FontAwesomeIcon icon={faImage} size={170} color='#3429A8' />
                <View style={styles.hIconPlus}>
                  <FontAwesomeIcon icon={faPlus} size={60} color='#3429A8' />
                </View>
                <Text style={styles.hTitle}>Adicionar foto</Text>  
              </View>
            </TouchableOpacity>
          :
          <View style={styles.hRemove}>
            <TouchableOpacity style={styles.hRemoveButton}
              onPress={()=>{
                setImagem({})
              }}
            >
              <FontAwesomeIcon icon={faXmark} size={40} color='black' />
            </TouchableOpacity>
            <View style={styles.header}>
              <Image source={{uri:imagem.uri}} resizeMode='contain' style={styles.hImage}/>
              <Text style={styles.hTitle}>Imagem do Ocorrido</Text>  
            </View>
          </View>
          }
            <View style={styles.body}> 
              <View style={styles.bContainer}> 
              
                {!!subType && !!subType.length ? 
                  (<>
                    <Text style={styles.bTitle2}>{categoria}</Text> 
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
                  :
                  (<>
                    <Text style={styles.bTitle2}>{categoria}</Text> 
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
                  onPress={() =>  
                    navigation.navigate({
                      name: 'Maps',
                      params: {
                        idPage: route.name,
                        categoria: categoria
                      }
                  })
                  }>
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
                  <Text style={styles.bTitle}>Sobre o Ocorrido:</Text>  
                  <TextInput style={styles.bInputBox} 
                    placeholder='Descrição do Problema'
                    multiline={true}
                    onChangeText={setDescricao}
                    value={descricao}
                  ></TextInput>  
                </View>  
                    
                <TouchableOpacity style={styles.bButton}
                  onPress={() => {
                    setPopUp({
                      onConfirm:  newOcorrencia,
                      onClose: setVisible,
                      //icon: faTriangleExclamation,
                      title:'Deseja Finalizar a Ocorrência?',
                      buttonPrimaryTitle: 'Finalizar',
                      buttonSecondaryTitle: 'Cancelar',
                    })
                    /* setPopUp({
                      onConfirm:  close,
                      onClose: setVisible,
                      icon: faTriangleExclamation,
                      title:'Ainda Não É Possível Finalizar!',
                      description: 'Há campos que não foram preenchidos ou selecionados, por favor preencha todos os campos.',
                      buttonPrimaryTitle: 'Fechar',
                    }) */
                    setVisible(true)
                }}>
                <Text style={styles.bLabel}>Finalizar Ocorrência</Text>
                </TouchableOpacity >

              </View>
            </View>
        </ScrollView>
      </Loading>
    </>
  );
}

export default Rep_Ocorrencia;