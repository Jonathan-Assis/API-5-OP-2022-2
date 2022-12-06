import React, {useEffect, useState} from 'react'
import {View, Text, Modal, TouchableOpacity, Alert,Image, ScrollView} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarDays, faCamera, faCircleInfo, faCommentDots, faImages, faMapLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import * as ImagePicker from 'expo-image-picker';
import styles from './styles'
import moment from 'moment';


const BottomSheetImage = ({
    visible,
    setVisible,
    imagem,
    setImagem
    }) => {
    const [permission,setPermission]=useState(undefined)    

    const requestCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        
        if (status !== "granted"){
            Alert.alert('Permissão de câmera','negada!')
            setPermission(false)
        } else {
            try {
                setPermission(true)
                const cameraEnabled = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    base64: true,
                    quality: 0.1/* .5 */,
                })
                if(cameraEnabled){
                    const image_aux = cameraEnabled;
                    image_aux.base64 = 'data:image/png;base64,' + image_aux.base64;
                    setImagem(image_aux)
                    //console.log('image camera',cameraEnabled)
                }
            } catch (e) {
                console.log('erro na camera',e)
            }

        }
    }

    const requestGallery = async (img) => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (status !== "granted"){
            Alert.alert('Permissão de Galeria','negada!')
            setPermission(false)
        } else {
            try {
                setPermission(true)
                const galleryEnabled = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    base64: true,
                    quality: 0.5,
                })
                if(galleryEnabled){
                    const image_aux = galleryEnabled;
                    image_aux.base64 = 'data:image/png;base64,' + image_aux.base64;
                    setImagem(image_aux)
                   // console.log('image camera',galleryEnabled)
                }
            } catch (e) {
                console.log('erro na galeria',e)
            }

        }
    }

return(
    <Modal
        animationType="slide"
        visible={visible}
        hardwareAccelerated={true}
        onRequestClose={()=>setVisible(false)}
        transparent
    >
        <View style={styles.container}>
            <View style={styles.modal}>
                
                <View style={styles.footer}>
                    <View style={styles.fheader}>
                        <Text style={styles.fTitle}>Adicionar Foto:</Text>
                        <TouchableOpacity
                        onPress={()=>{setVisible(false)}}
                        >
                            <FontAwesomeIcon icon={faXmark} size={30} color='black' />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.fButton}
                        onPress={()=>{
                            requestCamera()
                            setVisible(false)
                        }}
                        >
                    <FontAwesomeIcon icon={faCamera} size={30} color='white' />
                        <Text style={styles.fButtonLabel}>Utilizando a Câmera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.fButton}
                        onPress={()=>{
                            requestGallery()
                            setVisible(false)
                        }}
                        >
                        <FontAwesomeIcon icon={faImages} size={30} color='white' />
                        <Text style={styles.fButtonLabel}>Imagem da Galeria</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </Modal>
    )
}


const convertDateTime = (data) => {
    return moment(data).utcOffset('-03:00').format('DD/MM/YYYY HH:mm');
  }

const BottomSheet = ({ 
    pinSelected,
    setPinSelected,
    imagem,
    bairro,
    data,
    titulo,
    categoria,
    subCategoria,
    descricao
    }) => {


return(
    <Modal
        animationType="slide"
        pinSelected={pinSelected}
        hardwareAccelerated={true}
        onRequestClose={()=>setPinSelected(false)}
        transparent
        >
        <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.exitButton}
          onPress={()=>{
              setPinSelected(false)
            }}
        >
          <FontAwesomeIcon icon={ faXmark } size={40} color={'#fff'}  />
        </TouchableOpacity>
            <View style={styles.bsHeader}>
               <Image source={{uri: `${imagem}`}} style={styles.bsImage} resizeMode='cover'/>
            
              <View style={styles.bsInfo}>
                <View style={styles.bsCamera}>
                  <View style={styles.bsImageLabel}>
                    <FontAwesomeIcon icon={faCamera} size={25} color='#fff' />
                  </View>
                </View>
              </View>
            </View>

            <View style={{paddingHorizontal:14, paddingVertical:10}}>
                <Text style={{fontSize:30, fontWeight:'bold'}}>
                {titulo}
                </Text>
                <View style={styles.bsTipo}>
                    <FontAwesomeIcon icon={faCircleInfo} size={25} color='#323232' />
                    {
                        categoria === 'Outros' ? (
                            <Text style={styles.bsTipoTitle}>{categoria}</Text>
                            ) : (
                            <>
                              <Text style={styles.bsTipoTitle}>{categoria},</Text>
                              <Text style={styles.bsTipoTitle}>{subCategoria}</Text>
                            </>
                      )
                    }
                </View>
            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.bsInfo}>
                <View style={styles.bsInfoContainer}>
                    <View style={styles.bsData}>
                        <View style={styles.bsField}>
                            <FontAwesomeIcon icon={faCalendarDays} size={25} color='#323232' />
                            <Text style={styles.bsTitle}>Data e Hora do Registro:</Text>
                        </View>
                        <Text style={styles.bsSubTitle}>
                            {convertDateTime(data)}
                        </Text>
                    </View>
                    <View style={styles.bsBairro}>
                        <View style={styles.bsField}>
                            <FontAwesomeIcon icon={faMapLocationDot} size={25} color='#323232' />
                            <Text style={styles.bsTitle}>Bairro do Ocorrido:</Text>
                        </View>

                        <Text style={styles.bsSubTitle}>
                            {bairro}
                        </Text>
                    </View>

                    <View style={styles.bsDescricao}>
                        <View style={styles.bsField}>
                            <FontAwesomeIcon icon={faCommentDots} size={25} color='#323232' />
                            <Text style={styles.bsTitle}>Relato:</Text>
                        </View>
                        <Text style={styles.bsSubTitle}>
                        {descricao}
                        </Text>
                    </View>
                </View>
            </ScrollView>
          </View>
    </Modal>
)
}
export { BottomSheetImage, BottomSheet }