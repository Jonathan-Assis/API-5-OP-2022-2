import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserPen, faImage, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../contexts/Auth';
import styles from './styles';


const Settings = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth()
  const authData = JSON.parse(useAuth().authData)

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.image}>
            <FontAwesomeIcon icon={ faImage } size={140} color={'white'}/>
        </View>

        <Text style={styles.bText}>{authData.nome}</Text>
        <Text style={styles.bText}>{authData.email}</Text>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.fButton}
            onPress={() => navigation.navigate('Edit_Profile')}
          >
            <FontAwesomeIcon icon={ faUserPen } size={24} color={'white'} />
            <Text style={styles.fLabel}>Editar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fButton}
            onPress={signOut}
          >
            <FontAwesomeIcon icon={ faArrowRightFromBracket } size={24} color={'white'}/>
            <Text style={styles.fLabel}>Sair da Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Settings;