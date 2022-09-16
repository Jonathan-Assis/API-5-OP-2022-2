import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';

import ProfileIcon from '../../assets/Icons/file-person'
const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProfileIcon size={120} />
        <TouchableOpacity style={styles.hButton}
          onPress={ () => navigation.navigate('Edit_Profile')}
        >
          <Text style={styles.hText}>Editar Perfil</Text>  
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.fButton}>
            <Text style={styles.fText}>Sair</Text>  
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Settings;