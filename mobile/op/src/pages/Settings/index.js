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

  return (<>
  <View style={styles.container}>
    <View style={styles.bImage}>
        <FontAwesomeIcon icon={ faImage } size={140} color={'black'}/>
    </View>

    <View style={styles.body}>
      <TouchableOpacity style={styles.fButton}
        onPress={() => navigation.navigate('Edit_Profile')}
      >
        <Text style={styles.fLabel}>Editar Perfil</Text>
        <FontAwesomeIcon icon={ faUserPen } size={24} color={'white'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.fButton}
        onPress={signOut}
      >
        <Text style={styles.fLabel}>Sair da Conta</Text>
        <FontAwesomeIcon icon={ faRightFromBracket } size={24} color={'white'}/>
      </TouchableOpacity>
    </View>
  </View>
    </>
  );
}

export default Settings;