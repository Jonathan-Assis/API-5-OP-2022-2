import React, {useState} from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';
import ServerConnection from '../../services';

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
        if(senha === confSenha) {
            setLoading(true);
            ServerConnection.cadastro({
                nome, cpf, endereco, bairro, senha
            }).then(data => 
                console.log(data.response)//mudar depois
            ).finally(() => {
                setLoading(false);
                navigation.navigate('Home');//mudar depois
            });
        }
    }

    return (
        <ScrollView style={styles.container}>
            {loading
                ? <Text>estou carregando...</Text>
                : (<View style={styles.body}>
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
                </View>)
            }
        </ScrollView>
    );
  }
  
  export default Cadastro