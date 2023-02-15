import React, { useEffect, useState } from 'react'
import {View, Text, Modal, TouchableOpacity, SectionList, ActivityIndicator} from 'react-native'
import { CheckBox } from '../CheckBox'

import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import ServerConnection from '../../services'
import dayjs from 'dayjs'

const PopUpActions = ({
    icon, 
    title, 
    description, 
    buttonPrimaryTitle, 
    buttonSecondaryTitle, 
    onConfirm, 
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
                        <Text style={styles.fButtonSecondaryLabel}>{buttonSecondaryTitle}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.fButtonPrimary}
                        onPress={
                            onConfirm
                        }
                        >
                        <Text style={styles.fButtonPrimaryLabel}>{buttonPrimaryTitle}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </Modal>
    )
}

const PopUpAlert = ({
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
const PopUpTermos = ({
    setIsAccepted,
    accepted,
    visible,
    setVisible,
    aboutTerms,
    setAboutTerms,
    termsAccepted,
    setTermsAccepted
}) => {
    const [getHeaders,setGetHeaders] = useState({})
  
    const getTermos = async () => {
        await ServerConnection.getLastTermos()
        .then(({data})=> {
            setTermos(data)
            setAboutTerms({id:data._id, acceptedAt: new Date().toISOString()})
            if(Object.keys(data).length > 1){
                headers(data?.sessions)
            }
        })
        .catch((e)=> console.error(e))
    }
    const [termos, setTermos] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const headers = async (sessions) =>{
        let aux = {}
        const title = await sessions.map(e => e.title)
        setTermsAccepted(()=> { 
            title.map(e => {
                aux[e] = false
            })
            return aux
        })
        setGetHeaders(()=> { 
            title.map(e => {
                aux[e] = false
            })
            return aux
        })
    }
    
    useEffect(() => {
        setIsLoading(true)
        getTermos()
        .finally(()=> {
            setIsLoading(false)
        })
    }, [])

    return (
        <Modal
            animationType="fade"
            visible={visible}
            hardwareAccelerated={true}
            transparent
        >
            <View style={styles.container}>
                <View style={styles.modalTermos}>
                    <View style={styles.headerTermos}>
                        <FontAwesomeIcon icon={faBook} size={18} color='#3429A8' />
                        <Text style={styles.hTermosTitle}>Termos de Uso</Text>
                    </View>
                    { isLoading ? (
                        <View style={{height:'75%', justifyContent: 'center'}}>
                            <ActivityIndicator size="large" color='#3429A8' />
                        </View>
                        ) : (
                        <>
                            <Text style={styles.hTermosCreatedAt}>{dayjs(termos?.createdAt).format('DD/MM/YY hh:mm:ss')}</Text>
                            <Text style={styles.hTermosCreatedAt}>Versão {termos?.versao}</Text>

                        <SectionList 
                            style={styles.bodyTermos}
                            keyExtractor={(item,index) => item+index}
                            sections={termos?.sessions}                
                            renderItem={({item}) => (
                                <Text style={styles.bTermosDescription}>{item}</Text>
                            )}
                            renderSectionHeader={({section}) => {
                                const title = section.title;
                                return (
                                        <CheckBox
                                            title={section.title} 
                                            onPress={() => {
                                                setTermsAccepted(prev => ({...prev, [title]: !prev[title]}))
                                            }}
                                            checked={termsAccepted[section.title]}
                                        />
                                )
                            }}
                            ItemSeparatorComponent={() => (
                                <View style={{paddingBottom:5}}/>
                            )}
                            SectionSeparatorComponent={() => (
                                <View style={{paddingBottom:15}}/>
                            )}
                        />

                        <View style={styles.footer}>
                            <TouchableOpacity
                                style={styles.fButtonSecondary}
                                onPress={()=>{
                                    setVisible(false)
                                    setTermsAccepted(getHeaders)
                                    setIsAccepted(false)
                                }}
                            >
                                <Text style={styles.fButtonSecondaryLabel}>Recusar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity disabled={ !accepted } 
                                style={ !accepted ? styles.fTermosButtonDisabled : styles.fTermosButtonEnabled }
                                onPress={() => {
                                    setVisible(false)
                                    setIsAccepted(true)
                                }}
                            >
                                <Text style={styles.fTermosButtonLabel}>Aceitar Termos</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                    )}
                </View>
            </View>
        </Modal>
    )
}

export { PopUpActions, PopUpAlert, PopUpTermos }