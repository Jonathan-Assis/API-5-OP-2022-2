import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native'
import * as ImagePicker from 'expo-image-picker';

const requestCamera = (props) => {
    const [image,setImage]=useState(null)
    const [permission,setPermission]=useState(undefined)    
    useEffect(() => {
        cameraPermission()
    },[])

    const cameraPermission = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        
        if (status !== "granted"){
            Alert.alert('Permissão de camera','negada!')
            setPermission(false)
        } else {
            try {
                setPermission(true)
                const cameraEnabled = await ImagePicker.launchCameraAsync({
                    allowsEditing: true,
                    base64: true,
                    aspect: [100,100],
                    quality:1,
                })
                setImage(cameraEnabled.base64)
                console.log('image camera',image)
            } catch (e) {
                console.log('erro camera',e)
            }

        }
    }
}

const requestGallery = (props) =>{
    const [image,setImage]=useState(null)
    const [permission,setPermission]=useState(undefined)
    useEffect(() => {
        galleryPermission()
    },[])
    const galleryPermission = async () => {
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
                })
                setImage(galleryEnabled.base64)
                console.log('image gallery',image)
            } catch (e) {
                console.log('erro gallery',e)
            }

        }
    }
}



export default {requestCamera, requestGallery};