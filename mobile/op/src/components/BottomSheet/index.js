import React, {useState} from 'react'
import {View, Text, Modal, TouchableOpacity, Alert} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faImages, faXmark } from '@fortawesome/free-solid-svg-icons'
import * as ImagePicker from 'expo-image-picker';


import styles from './styles'

const BottomSheetImage = ({
    visible,
    setVisible
    }
) => {
    const [image,setImage]=useState(null)
    const [permission,setPermission]=useState(undefined)    


    const requestCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        
        if (status !== "granted"){
            Alert.alert('Permissão de camera','negada!')
            setPermission(false)
        } else {
            try {
                setPermission(true)
                const cameraEnabled = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    base64: true,
                    aspect: [100,100],
                    quality:1,
                }).then((data) => {
                    setImage(data.base64)

                    console.log('image camera',data.base64)
                })
            } catch (e) {
                console.log('erro camera',e)
            }

        }
    }

    const requestGallery = async () => {
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
                    aspect: [100,100],
                    quality:1,  
                }).then((data) => {
                    setImage(data.base64)

                    console.log('image camera',image)
                })
            } catch (e) {
                console.log('erro gallery',e)
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
                        }}
                        >
                    <FontAwesomeIcon icon={faCamera} size={30} color='white' />
                        <Text style={styles.fButtonLabel}>Utilizando a Câmera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.fButton}
                        onPress={()=>{
                            requestGallery()
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

const BottomSheetSlider = ({
    icon, 
    title, 
    description, 
    buttonPrimaryTitle, 
    onClose,
    visible,
    setVisible
}) => {

return(
    <Modal
        animationType="fade"
        visible={visible}
        onRequestClose={()=>setVisible(false)}
        hardwareAccelerated={true}
        transparent
    >
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <View style={styles.hIcon}>
                        {icon}
                    </View>
                    <Text style={styles.hTitle}>{title}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bDescription}>{description}</Text>
                </View>
                
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.fButtonSecondary}
                        onPress={
                            onClose
                        }
                        >
                        <Text style={styles.fButtonSecondaryLabel}>{buttonPrimaryTitle}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </Modal>
    )
}

export { BottomSheetImage, BottomSheetSlider }