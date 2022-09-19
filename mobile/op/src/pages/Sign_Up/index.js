import React, {useState} from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Loading } from '../../components';
import styles from './styles';
import ServerConnection from '../../services';

const Sign_Up = () => {
    const navigation = useNavigation();
    const [ loading, setLoading ] = useState(false);

    const [ nome, setNome ] = useState(undefined);
    const [ cpf, setCpf ] = useState(undefined);
    const [ cep, setCep ] = useState(undefined);
    const [ numero, setNumero ] = useState(undefined);
    const [ senha, setSenha ] = useState(undefined);
    const [ confSenha, setConfSenha ] = useState(undefined);

    const cadastro = () => {
        if(senha === confSenha) {
            setLoading(true);
            ServerConnection.cadastro({
                nome, cpf, cep, numero, senha
            }).then(data => 
                console.log(data.response)//mudar depois
            ).finally(() => {
                setLoading(false);
                navigation.navigate('Sign_In');//mudar depois
            });
        }
    }

    return (
        <Loading loading={loading}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.body}>

                        <View style={styles.bInput}>
                            <Text style={styles.bLabelTitle}>Nome:</Text>
                            <TextInput
                                style={styles.bInputBox}
                                placeholder='Nome'
                                onChangeText={setNome}
                                value={nome}
                            />
                        </View>

                        <View style={styles.bInput}>
                            <Text style={styles.bLabelTitle}>CPF:</Text>
                            <TextInput
                                style={styles.bInputBox}
                                placeholder='CPF'
                                onChangeText={setCpf}
                                value={cpf}
                            />
                        </View>

                        <View style={styles.bInput}>
                            <Text style={styles.bLabelTitle}>CEP:</Text>
                            <TextInput
                                style={styles.bInputBox}
                                placeholder='CEP'
                                onChangeText={setCep}
                                value={cep}
                            />
                        </View>

                        <View style={styles.bInput}>
                            <Text style={styles.bLabelTitle}>Número Residencial:</Text>
                            <TextInput
                                style={styles.bInputBox}
                                placeholder='Número'
                                onChangeText={setNumero}
                                value={numero}
                            />
                        </View>

                        <View style={styles.bInput}>
                            <Text style={styles.bLabelTitle}>Senha:</Text>                 
                            <TextInput
                                style={styles.bInputBox}
                                placeholder='Senha'
                                secureTextEntry={true}
                                value={senha}
                                onChangeText={setSenha}
                            />
                        </View>

                        <View style={styles.bInput}>
                            <Text style={styles.bLabelTitle}>Confirmar Senha:</Text>
                            <TextInput
                                style={styles.bInputBox}
                                placeholder='Confimar Senha'
                                secureTextEntry={true}
                                value={confSenha}
                                onChangeText={setConfSenha}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.bButton}
                            onPress={cadastro}
                        >
                            <Text style={styles.bLabel}>
                                Confirmar Cadastro
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Loading>
    );
  }
  
  export default Sign_Up