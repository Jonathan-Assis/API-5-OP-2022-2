import React, {useState} from 'react'
import {View, Text, Modal, TouchableOpacity, Alert} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styles from './styles'

export default function PopUp(){
    const [visible,setVisible]=useState(true)

return(
    <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={()=>setVisible(false)}
        transparent
    >
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <View style={styles.hIcon}>
                        <FontAwesomeIcon icon={faLocationDot} size={60} color='white' />
                    </View>
                    <Text style={styles.hTitle}>Titulo do Modal</Text>
                </View>
                <View style={styles.body}>
                    <Text>Descrição do modalaaaaa
                    Descrição do modal
                    Descrição do modal
                    Descrição do modal
                    </Text>
                </View>
                
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.fButtonSecondary}
                        onPress={()=>{
                            setVisible(false);
                        }}
                        >
                        <Text style={styles.fButtonSecondaryLabel}>Fechar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.fButtonPrimary}
                        onPress={()=>{
                            Alert.alert("Testado","Teste testado")
                        }}
                        >
                        <Text style={styles.fButtonPrimaryLabel}>Confirmar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </Modal>
    )
}