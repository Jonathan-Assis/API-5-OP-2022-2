import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserPen, faImage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../contexts/Auth';
import styles from './styles';


const Settings = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth()

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
    {/* <View style={styles.container}>

      <View style={styles.body}>
        <View style={styles.bContainer}> 
          <View style={styles.bImage}>
              <FontAwesomeIcon icon={ faImage } size={140} color={'black'}/>
          </View>

          <View style={styles.bRow}>
            <Text style={styles.bTitle}>Nome</Text>  
            <Text style={styles.bText}>Robervaldo Lopes</Text>  
          </View>

          <TouchableOpacity style={styles.hContainer}
            onPress={() => navigation.navigate('Edit_Profile')}
          >
            <View style={styles.hButton}>
              <Text style={styles.hButtonLabel}>Editar</Text>
              <FontAwesomeIcon icon={ faUserPen } size={26} color={'black'} />
            </View>
          </TouchableOpacity>

          <View style={styles.bRow}>
            <Text style={styles.bTitle}>E-mail</Text>
            <Text style={styles.bText}>RobervaldoFatecano@fatec.sp.gov.br</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.fButton}
          onPress={signOut}
        >
          <FontAwesomeIcon icon={ faRightFromBracket } size={24} color={'black'}/>
          <Text style={styles.fLabel}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View> */}
    </>
  );
}

export default Settings;