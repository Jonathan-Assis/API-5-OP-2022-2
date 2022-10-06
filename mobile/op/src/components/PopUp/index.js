import React, {useState} from 'react'
import {View, Text, Modal, TouchableOpacity} from 'react-native'

import styles from './styles'

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

export { PopUpActions, PopUpAlert }