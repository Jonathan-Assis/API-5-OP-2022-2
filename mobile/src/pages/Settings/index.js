import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserPen, faCircleUser, faArrowRightFromBracket,faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../contexts/Auth'
import { LinearBackground, Walkthrough } from '../../components'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'


const Settings = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth()
  const authData = JSON.parse(useAuth().authData)
  const [walkOn,setWalkOn] = useState(false)

  return (
    <>
    <Walkthrough walkOn={walkOn} setWalkOn={setWalkOn} />
    <LinearBackground>
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
            <TouchableOpacity style={styles.fButton}
              onPress={() => navigation.navigate('Edit_Profile')}
            >
              <FontAwesomeIcon icon={ faUserPen } size={24} color={'white'} />
              <Text style={styles.fLabel}>Editar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fButton}
              onPress={() => {setWalkOn(true)}}
            >
              <FontAwesomeIcon icon={ faCircleInfo } size={24} color={'white'} />
              <Text style={styles.fLabel}>Ver Tutorial</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fButton}
              onPress={signOut}
            >
              <FontAwesomeIcon icon={ faArrowRightFromBracket } size={24} color={'white'}/>
              <Text style={styles.fLabel}>Sair da Conta</Text>
            </TouchableOpacity>
        </View>
      </View>
      </LinearBackground>
    </>
  );
}

export default Settings;