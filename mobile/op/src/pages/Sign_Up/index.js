import React, {useState} from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';


const Sign_Up = () => {
    const navigation = useNavigation();
    const [ nome, setNome ] = useState(undefined);
    const [ cpf, setCpf ] = useState(undefined);
    const [ email, setEmail ] = useState(undefined);
    const [ senha, setSenha ] = useState(undefined);
    const [ confSenha, setConfSenha ] = useState(undefined);

    const cadastro = () => {
        if(senha === confSenha) {
            navigation.navigate({ name: 'User_Term', params: {
                nome: nome, 
                cpf: cpf, 
                email: email, 
                senha: senha 
            } })
        }
    }

    return (
        <ScrollView style={styles.container}>
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
                    <Text style={styles.bLabelTitle}>Email:</Text>
                    <TextInput
                        style={styles.bInputBox}
                        placeholder='Email'
                        onChangeText={setEmail}
                        value={email}
                        keyboardType='email-address'
                    />
                </View>

                <View style={styles.bInput}>
                    <Text style={styles.bLabelTitle}>CPF:</Text>
                    <TextInput
                        style={styles.bInputBox}
                        placeholder='CPF'
                        onChangeText={setCpf}
                        value={cpf}
                        keyboardType='decimal-pad'
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
        </ScrollView>
    );
}

export default Sign_Up