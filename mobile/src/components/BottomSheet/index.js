import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react'
import {View, Text, Modal, TouchableOpacity, Alert, Dimensions} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faImages, faXmark } from '@fortawesome/free-solid-svg-icons'
import * as ImagePicker from 'expo-image-picker';
import { Gesture, GestureDetector, } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import styles from './styles'

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
                    setImagem(cameraEnabled)
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
                    setImagem(galleryEnabled)
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

const {height:SCREEN_HEIGHT}=Dimensions.get('window')
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT
//const MAX_TO_CATEGORY_TRANSLATE_Y = -SCREEN_HEIGHT + 60

const BottomSheetSlider = forwardRef(({children, slider}, sliderRef) => {
    const translateY = useSharedValue(0)
    const active = useSharedValue(false)

    const scrollTo = useCallback((destination)=>{
        'worklet';
        active.value = destination !== -80;

        translateY.value = withSpring(destination, { damping: 50 });
    },[])

    const isActive = useCallback(()=>{
        return active.value
    },[])

    useImperativeHandle(sliderRef,()=>({scrollTo, isActive}), [
        scrollTo, 
        isActive
    ])

    const context = useSharedValue({y:0})
    const gesture = Gesture.Pan()
        .onStart(()=>{
            context.value = { y: translateY.value }
        })
        .onUpdate((event)=>{
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
        })
        .onEnd(()=>{
            if (translateY.value > -SCREEN_HEIGHT / 3) {
                scrollTo(-80);
              } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
                scrollTo(MAX_TRANSLATE_Y);
              } else if (translateY.value > -SCREEN_HEIGHT / 1.5 && translateY.value < -SCREEN_HEIGHT / 3){
                scrollTo(-320)
              }
        })

    const animationBottomSheet=useAnimatedStyle(()=>{
        const borderRadius = interpolate(
            translateY.value, 
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25,5],
            Extrapolate.CLAMP
            )

        return {
            borderRadius,
            transform: [{ translateY: translateY.value }]
        }
    })

    useEffect(()=>{
        if((-SCREEN_HEIGHT/2) > -320){
            scrollTo(-320)
        } else {
            scrollTo(-SCREEN_HEIGHT/2)
        }
    },[])

return(
    <>
        <Animated.View style={[styles.bottomSheetContainer, animationBottomSheet]}>
            <GestureDetector gesture={gesture}>
                    {slider}
            </GestureDetector>
                    {children}
        </Animated.View>
    </>
    )
})

export { BottomSheetImage, BottomSheetSlider }