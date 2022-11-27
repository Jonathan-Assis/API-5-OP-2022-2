import React, {useEffect, useState} from 'react'
import {View, Text, Modal, TouchableOpacity, Alert, Dimensions,Image, ScrollView} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faCircleInfo, faImages, faMapLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import * as ImagePicker from 'expo-image-picker';
import styles from './styles'
import moment from 'moment';
import Logo from '../../assets/Logotype/LogoOP.svg'


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
                    quality: 0.5,
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
            <View style={styles.bsHeader}>
               <Image source={{uri: `${imagem}`}} style={styles.bsImage} resizeMode='cover'/>
            
              <View style={styles.bsInfo}>
                <View style={styles.bsBairro}>
                  <FontAwesomeIcon icon={faMapLocationDot} size={25} color='#fff' />
                  <View style={styles.bsImageLabel}>
                    <Text style={styles.bsBairroTitle}>
                      {bairro}
                    </Text>
                    <Text style={styles.bsData}>
                      {convertDateTime(data)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>


            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.bsInfo}>
                <View style={styles.bsInfoContainer}>
                    <Text style={{fontSize:26, fontWeight:'bold'}}>
                    {titulo}
                    </Text>
                    <View style={styles.bsTipo}>
                    <FontAwesomeIcon icon={faCircleInfo} size={17} color='#323232' />
                    <Text style={styles.bsTipoTitle}>{categoria},</Text>
                    <Text style={styles.bsTipoTitle}>{subCategoria}</Text>
                    </View>

                    <View style={styles.bsDescricao}>
                        <Text style={styles.bsTipoTitle}>Relato:</Text>
                        <Text style={styles.bsDescricaoText}>
                        {descricao}
                        </Text>
                    </View>

                    <View style={styles.bsApoio}>
                        <Logo style={{width:40, height:40}} resizeMode='contain'/>
                        <Text style={styles.bsApoioNumero}>
                        +60 Pessoas apoiaram isto
                        </Text>
                    </View>


                    <TouchableOpacity style={styles.bsApoiar}>
                        <Logo style={{width:40, height:40}} resizeMode='contain'/>
                        <Text style={styles.bsApoiarLabel}>Apoiar causa</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
          </View>
    </Modal>
)
}
export { BottomSheetImage, BottomSheet }