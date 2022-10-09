import React, {useEffect, useState} from 'react';
import { View, Text,TextInput,TouchableOpacity, ScrollView, Alert, Image} from 'react-native';
/* import { Picker } from "@react-native-picker/picker";
import {useNavigation} from '@react-navigation/native'
import ServerConnection from '../../services'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapLocationDot, faImage, faCircleCheck, faCamera, faTriangleExclamation, faXmark, faMagnifyingGlassPlus, faPlus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import {PopUpAlert,PopUpActions, BottomSheetImage} from '../../components'
import styles from './styles';
import {Loading} from '../../components'

import { useRoute } from '@react-navigation/native';
 */

const Chamados = (props) => {
 /*  const navigation = useNavigation();
  const route = useRoute()

  //form
  const [imagem,setImagem]=useState(false)
  const [titulo,setTitulo]=useState('')
  const [latlng,setLatlng]=useState({})
  const [descricao,setDescricao]=useState('')
  let coordinate = props.route.params?.coordinate

  

  
  //Define o tipo da ocorrência
  
  //Define coordenadas
  useEffect(() => {
    if(coordinate !== undefined){
      setLatlng(coordinate)
    }
  },[coordinate])

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
  if(imagem === false || imagem.cancelled === true){
  }
  else if (imagem.cancelled == false) {
    setImageSelected(true)
  }
},[imagem])

const ocorrencia = () => {} */


  return (
    <>
    <View>
      <Text>...</Text>
    </View>
    {/* <PopUpAlert
        icon={
          <FontAwesomeIcon icon={popUp.icon} size={60} color='white' />
        }
        title={popUp.title}
        description={popUp.description}
        buttonPrimaryTitle={popUp.buttonPrimaryTitle}
        onClose={popUp.onClose}
        visible={visible}
        setVisible={setVisible}
      />
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
              <View style={styles.hImage}>
                <FontAwesomeIcon icon={faImage} size={170} color='#3429A8' />
                <View style={styles.hIconPlus}>
                  <FontAwesomeIcon icon={faPlus} size={60} color='#3429A8' />
                </View>
                <Text style={styles.hTitle}>Adicionar foto</Text>  
              </View>
            </TouchableOpacity>
          :
            <View style={{ marginVertical:10}}>
              <TouchableOpacity style={{position:'absolute',alignItems: 'flex-end', top:10, right:10}}
                onPress={()=>{
                  setImageSelected(false)
                }}
              >
                <FontAwesomeIcon icon={faXmark} size={40} color='black' />
              </TouchableOpacity>
              <View style={styles.header}>
                <Image source={{uri:imagem.uri}} resizeMode='contain' style={{width:180,height:180}}/>
                <Text style={styles.hTitle}>Imagem do Ocorrido</Text>  
              </View>
            </View>
          }
          
            <View style={styles.body}> 
              <View style={styles.bContainer}> 

              
              
              
                <View style={styles.bInput}>
                  <Text style={styles.bTitle}>subtipo</Text>  
                  <TextInput style={styles.bInputStrokeBox} 
                    multiline={true}
                    numberOfLines={1}
                    onChangeText={setTitulo}
                    value={titulo}
                    placeholder='subtipo da Ocorrência'
                    placeholderTextColor={styles.bInputStrokeBox.color}
                  ></TextInput>
                </View>

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
                    onConfirm:  close,
                    onClose: setVisible,
                    icon: faTriangleExclamation,
                    title:'Deseja Finalizar a Ocorrência?',
                    buttonPrimaryTitle: 'Finalizar',
                    buttonSecondaryTitle: 'Cancelar',
                  })
                   setPopUp({
                    onConfirm:  close,
                    onClose: setVisible,
                    icon: faTriangleExclamation,
                    title:'Ainda Não É Possível Finalizar!',
                    description: 'Há campos que não foram preenchidos ou selecionados, por favor preencha todos os campos.',
                    buttonPrimaryTitle: 'Fechar',
                  }) 
                  setVisible(true)
                }}>
                <Text style={styles.bLabel}>Finalizar Ocorrência</Text>
                </TouchableOpacity >

              </View>
            </View>
        </ScrollView> */}
    </>
  );
}

export default Chamados
