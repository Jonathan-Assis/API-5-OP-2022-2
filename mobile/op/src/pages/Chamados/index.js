import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import styles from './styles';
import {PopUpActions} from '../../components'

const Chamados = (props) => {
  const alerta = () =>{
    return Alert.alert("Teste", "confirmado")
  }
  const close = () =>{
  Alert.alert("Teste", "fechado")
  setVisible(false)
  }
  const [visible,setVisible]=React.useState(false)

  return (
    <View style={styles.container}>
      <PopUpActions 
        icon={
          <FontAwesomeIcon icon={faIdCard} size={60} color='white' />
        }
        title='Permissão de Localização Negada! ' 
        description='É necessário a habilitar a permissão de localização para o uso do Mapa.'
        buttonPrimaryTitle='Confirmar'
        buttonSecondaryTitle='Fechar'
        onConfirm={alerta}
        onClose={close}
        visible={visible}
        setVisible={setVisible}
      />
      <TouchableOpacity
      onPress={()=>
        setVisible(true)
      }
      >
        <Text style={styles.bText}>Página Chamados abertos</Text>  
        <Text>Em desenvolvimento!</Text>

      </TouchableOpacity>
    </View>
  );
}

export default Chamados