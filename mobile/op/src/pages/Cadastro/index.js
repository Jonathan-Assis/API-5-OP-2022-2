import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';

const Cadastro = () => {
    const navigation = useNavigation();
    const [ loading, setLoading ] = useState(false);

    const [ nome, setNome ] = useState('undefined');
    const [ cpf, setCpf ] = useState(undefined);
    const [ endereco, setEndereco ] = useState(undefined);
    const [ bairro, setBairro ] = useState(undefined);
    const [ senha, setSenha ] = useState(undefined);
    const [ confSenha, setConfSenha ] = useState(undefined);

    const cadastro = () => {
        navigation.navigate('Home');
    }

    return (
      <View style={styles.container}>
            {loading
                ? <Text>estou carregando...</Text>
                : (<>
                    <View style={styles.body}>
                        <Text style={styles.bTextPrimary}>Cadastro</Text>  
                        <TextInput
                            style={styles.bTextInput}
                            placeholder='Nome'
                            onChangeText={setNome}
                            value={nome}
                        />

                        <TextInput
                            style={styles.bTextInput}
                            placeholder='CPF'
                            onChangeText={setCpf}
                            value={cpf}
                        />

                        <TextInput
                            style={styles.bTextInput}
                            placeholder='Endereço'
                            onChangeText={setEndereco}
                            value={endereco}
                        />

                        <TextInput
                            style={styles.bTextInput}
                            placeholder='Bairro'
                            onChangeText={setBairro}
                            value={bairro}
                        />

                        <TextInput
                            style={styles.bTextInput}
                            placeholder='Senha'
                            value={senha}
                            onChangeText={setSenha}
                        />

                        <TextInput
                            style={styles.bTextInput}
                            placeholder='Confimar Senha'
                            value={confSenha}
                            onChangeText={setConfSenha}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={cadastro}
                        >
                            <Text style={styles.buttonText}>
                                Entrar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>)
            }
        
            


          {/* <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text>Ir para Home</Text>
          </TouchableOpacity> */}
      </View>
    );
  }
  
  export default Cadastro