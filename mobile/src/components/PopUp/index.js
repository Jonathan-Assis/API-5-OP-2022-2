import React, { useEffect, useState } from 'react'
import {View, Text, Modal, TouchableOpacity, SectionList, ActivityIndicator} from 'react-native'
import { CheckBox } from '../CheckBox'

import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import ServerConnection from '../../services'
import dayjs from 'dayjs'
import { useAuth } from '../../contexts/Auth'

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
                        <FontAwesomeIcon icon={faBook} size={18} color='#4444EE' />
                        <Text style={styles.hTermosTitle}>Termos de Uso</Text>
                    </View>
                    { isLoading ? (
                        <View style={{height:'75%', justifyContent: 'center'}}>
                            <ActivityIndicator size="large" color='#4444EE' />
                        </View>
                        ) : (
                        <>
                            <Text style={styles.hTermosCreatedAt}>{dayjs(termos?.acceptedAt).format('DD/MM/YY hh:mm:ss')}</Text>
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

const PopUpChangeTermos = ({
    visible,
    setVisible,
    setTermsData
}) => {
    const authData = JSON.parse(useAuth().authData)

    const [termos, setTermos] = useState({})

    const getCompairTermos = async (id) => {
        await ServerConnection.compairTermos({"id":id})
        .then(({ data }) => {
            setTermos(data)
            setTermsData(data)

            setVisible(data.lastTermo !== data.termos[0].id)
        })
        .catch(e => console.log(e))
    }
    
    useEffect(() => {
        getCompairTermos(authData._id)
    },[])
    
    
    return (
        <Modal
            animationType="fade"
            visible={visible/* Object.keys(termos).length > 0 */}
            hardwareAccelerated={true}
            transparent
        >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <View style={styles.hIcon}>
                            <FontAwesomeIcon icon={faBook} size={45} color='#fff'/>
                        </View>
                        <Text style={styles.hTitle}>Nova Versão dos Termos de Uso</Text>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.bDescription}>Uma nova versão nos Termos de Uso está em vigor (v. {termos?.version}).</Text>
                        <Text style={styles.bDescription}>Confira as mudanças para mais detalhes.</Text>
                    </View>
                    
                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={styles.fButtonSecondary}
                            onPress={() => setVisible(false)}
                            >
                            <Text style={styles.fButtonSecondaryLabel}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const PopUpShowTermo = ({
    termo_id,
    old,
    visible,
    setVisible,
    prevAccepted,
    setTermChange,
    accepted,
    termsAccepted,
    setTermsAccepted
}) => {
    const [getHeaders,setGetHeaders] = useState([])

    const { tokenData } = useAuth();

    const getTermos = async () => {
        //console.log('------------novos dados------------')
        !!termo_id && await ServerConnection.getTermos({ id: termo_id })
        .then(({ data }) => {
            setTermos(data)

            if(Object.keys(data).length > 1){
                headers(data?.sessions)
            }
        })
        .catch((e)=> console.error('Erro: ',e))
    }
    
    const [termos, setTermos] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const headers = async (sessions) =>{
        const title = await sessions.map(e => e.title)
        setTermsAccepted(()=> { 
            const aux = {}
            title.map(e => {
                aux[e] = !!prevAccepted[e]
            })
            return aux
        })
        setGetHeaders(()=> { 
            const aux = {}
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
                        <FontAwesomeIcon icon={faBook} size={18} color='#4444EE' />
                        <Text style={styles.hTermosTitle}>Termos de Uso</Text>
                    </View>
                    { isLoading ? (
                        <View style={{height:'75%', justifyContent: 'center'}}>
                            <ActivityIndicator size="large" color='#4444EE' />
                        </View>
                        ) : (
                        <>
                            <Text style={styles.hTermosCreatedAt}>{dayjs(prevAccepted?.acceptedAt).format('DD/MM/YY hh:mm:ss')}</Text>
                            <Text style={styles.hTermosCreatedAt}>Versão {termos?.versao}</Text>

                       <SectionList 
                            style={styles.bodyTermos}
                            keyExtractor={(item,index) => item+index}
                            sections={termos?.sessions}
                            renderItem={({item}) => (
                                <Text style={styles.bTermosDescription}>{item}</Text>
                            )}
                            renderSectionHeader={({section}) => {
                                const title = section?.title;
                                return !old
                                    ? <CheckBox
                                        title={section?.title} 
                                        onPress={() => {
                                            setTermsAccepted(prev => ({...prev, [title]: !prev[title]}))
                                        }}
                                        checked={termsAccepted[section?.title]}
                                    />
                                    : <Text style={styles.hTitle}>{title}</Text>
                            }}
                            ItemSeparatorComponent={() => (
                                <View style={{paddingBottom:5}}/>
                            )}
                            SectionSeparatorComponent={() => (
                                <View style={{paddingBottom:15}}/>
                            )}
                        />

                        <View style={styles.footer}>
                            {!old ? <>
                                <TouchableOpacity
                                    style={styles.fButtonSecondary}
                                    onPress={()=>{
                                        setVisible(false)
                                        setTermChange(getHeaders)
                                    }}
                                >
                                    <Text style={styles.fButtonSecondaryLabel}>Recusar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity disabled={ !accepted } 
                                    style={ !accepted ? styles.fTermosButtonDisabled : styles.fTermosButtonEnabled }
                                    onPress={() => {
                                        setVisible(false)
                                        setTermChange(termsAccepted)
                                    }}
                                >
                                    <Text style={styles.fTermosButtonLabel}>Aceitar Termos</Text>
                                </TouchableOpacity>
                            </>
                            : <TouchableOpacity
                                style={styles.fButtonSecondary}
                                onPress={()=>{
                                    setVisible(false)
                                }}
                            >
                                <Text style={styles.fButtonSecondaryLabel}>Fechar</Text>
                            </TouchableOpacity>}
                        </View>
                    </>
                    )}
                </View>
            </View>
        </Modal>
    )
}

export { PopUpActions, PopUpAlert, PopUpTermos, PopUpChangeTermos, PopUpShowTermo }