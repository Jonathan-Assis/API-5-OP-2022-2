import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserPen, faCircleUser, faArrowRightFromBracket,faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../contexts/Auth';
import styles from './styles';


const Settings = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth()
  const authData = JSON.parse(useAuth().authData)

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <View style={styles.hImage}>
              {!!authData?.imagem
                ? <Image style={styles.hImageStyle} resizeMode='cover' source={{uri: `${authData?.imagem}`}}/>
                : <FontAwesomeIcon icon={ faCircleUser } size={140} color={'white'}/>
              }              
          </View>
          <Text style={styles.hTitle}>{authData.nome}</Text>
        </View>

      <View style={styles.bEmailBox}>
        <Text style={styles.bTitle}>Email:</Text>
        <Text style={styles.bText}>{authData.email}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.fButton}
            onPress={() => navigation.navigate('Edit_Profile')}
          >
            <FontAwesomeIcon icon={ faUserPen } size={24} color={'white'} />
            <Text style={styles.fLabel}>Editar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fButton}
            onPress={() => navigation.navigate(Walkthrough)}
          >
            <FontAwesomeIcon icon={ faCircleInfo } size={24} color={'white'} />
            <Text style={styles.fLabel}>Tutorial do Aplicativo</Text>
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
  </View>
    
  );
}

export default Settings;