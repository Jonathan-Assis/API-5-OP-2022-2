import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from '../../styles/stylesVar';

const Cadastro = () => {
    const navigation = useNavigation();
    const [ loading, setLoading ] = useState(false);

    const [ nome, setNome ] = useState(undefined);
    const [ cpf, setCpf ] = useState(undefined);
    const [ endereco, setEndereco ] = useState(undefined);
    const [ bairro, setBairro ] = useState(undefined);
    const [ senha, setSenha ] = useState(undefined);
    const [ confSenha, setConfSenha ] = useState(undefined);

    const cadastro = () => {
        navigation.navigate('Home');
    }

    return (
      <View style={styles.bgSecondary}>
            {loading
                ? <Text>estou carregando...</Text>
                : (<>
                    <Text style={styles.bgPrimary}>Cadastro</Text>  
                    <TextInput
                        style={styles.placeholder}
                        onChangeText={setNome}
                        value={nome}
                    />

                    <TextInput
                        style={styles.placeholder}
                        onChangeText={setCpf}
                        value={cpf}
                    />

                    <TextInput
                        style={styles.placeholder}
                        onChangeText={setEndereco}
                        value={endereco}
                    />

                    <TextInput
                        style={styles.placeholder}
                        onChangeText={setBairro}
                        value={bairro}
                    />

                    <TextInput
                        style={styles.placeholder}
                        value={senha}
                        onChangeText={setSenha}
                    />

                    <TextInput
                        style={styles.placeholder}
                        value={confSenha}
                        onChangeText={setConfSenha}
                    />

                    <TouchableOpacity onPress={cadastro}>
                        <Text>Entrar</Text>
                    </TouchableOpacity>
                </>)
            }
        
            


          {/* <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text>Ir para Home</Text>
          </TouchableOpacity> */}
      </View>
    );
  }
  
  export default Cadastro