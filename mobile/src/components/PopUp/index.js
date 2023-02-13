import React, { useState } from 'react'
import {View, Text, Modal, TouchableOpacity, ScrollView, SectionList} from 'react-native'

import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { termoDados } from './data'

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
    visible,
    setVisible
}) => {
    const [ accepted, setAccepted ] = useState(false);
  
    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
      const paddingToBottom = 20;
      return layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom;
    };

return(
    <Modal
        animationType="fade"
        visible={visible}
        onRequestClose={()=>setVisible(false)}
        hardwareAccelerated={true}
        transparent
    >
        <View style={styles.container}>
            <View style={styles.modalTermos}>
                <View style={styles.headerTermos}>
                    <FontAwesomeIcon icon={faBook} size={18} color='#3429A8' />
                    <Text style={styles.hTermosTitle}>Termos de Uso</Text>
                </View>

                <SectionList 
                    style={styles.bodyTermos}
                    keyExtractor={(item,index) => item+index}
                    onScroll={({nativeEvent}) => setAccepted(isCloseToBottom(nativeEvent))}
                    sections={termoDados}                
                    renderItem={({item}) => (
                        <Text style={styles.bTermosDescription}>{item}</Text>
                    )}
                    renderSectionHeader={({section}) => (
                        <Text style={{fontWeight:'bold'}}>
                            {section.title}
                        </Text>
                    )}
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
                            setIsAccepted(false)
                        }}
                    >
                        <Text style={styles.fButtonSecondaryLabel}>Recusar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity disabled={ !accepted } 
                        style={ accepted ? styles.fTermosButtonEnabled : styles.fTermosButtonDisabled }
                        onPress={() => {
                            setVisible(false)
                            setIsAccepted(true)
                        }}
                    >
                        <Text style={styles.fTermosButtonLabel}>Aceitar Termos</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </Modal>
    )
}

export { PopUpActions, PopUpAlert, PopUpTermos }