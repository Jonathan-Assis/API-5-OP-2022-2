import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import { useAuth } from '../../contexts/Auth'
import LogoOP from '../../assets/Logotype/LogoOP.svg'
import Animated, { BounceIn } from 'react-native-reanimated'
import { useFormattedCPF } from '../../util/formatField'

const Sign_In = () => {
  const navigation = useNavigation();
  const [formattedCPF, cpfNumbers, setCpf] = useFormattedCPF('');
  const [senha, setSenha]=useState('')

  const { signIn } = useAuth()
  const [showPassword, setShowPassword]=useState(true)

  return (
    <View style={styles.container}>
      <View style={styles.header}
      >
        <Animated.View
          entering={BounceIn}
        >
          <LogoOP style={styles.hLogotype} />
        </Animated.View>
        <Text style={styles.hTitle}>Ocorrências Públicas</Text>
      </View>

      <View style={styles.body}> 
        <View style={styles.bForm}> 
          <View style={styles.bInput}>
            <Text style={styles.bTitle}>CPF</Text>  
            <TextInput style={styles.bInputBox}
              placeholder="000.000.000-00" 
              keyboardType='numeric'
              maxLength={14}
              value={formattedCPF}
              onChangeText={setCpf}
            />
          </View>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Senha</Text>
            <View style={styles.bInputPassword}>
              <TextInput style={styles.bInputPasswordBox}
                placeholder="Insira a sua senha" 
                secureTextEntry={showPassword}
                value={senha} 
                onChangeText={setSenha}
                >
                </TextInput>
                
              { showPassword ? 
                <TouchableOpacity style={styles.bPasswordIcon}
                onPress={()=>{
                  setShowPassword(false)
                }}
                >
                <FontAwesomeIcon icon={faEyeSlash} size={30} color='black' />
              </TouchableOpacity>
               : 
               <TouchableOpacity style={styles.bPasswordIcon}
               onPress={()=>{
                 setShowPassword(true)
                }}
                >
                <FontAwesomeIcon icon={faEye} size={28} color='black' />
              </TouchableOpacity>
              }
              
            </View>
          </View>
          
          <TouchableOpacity style={styles.bButton}
            onPress={() => {
              signIn(cpfNumbers,senha)
            }}
            >    
            <Text style={styles.bLabel}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
              <Text style={styles.fDescription}>Não possui cadastro? </Text>
              <Pressable
                  animation
                  onPress={()=> navigation.navigate('Sign_Up')}
              >
                  <Text style={styles.fDescriptionCadastro}>Criar conta</Text>
              </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Sign_In;