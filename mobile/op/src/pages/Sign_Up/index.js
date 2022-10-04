import React, {useState} from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';


const Sign_Up = () => {
    const navigation = useNavigation();
    const [ state, setState ] = useState({
        nome: undefined,
        cpf: undefined,
        email: undefined,
        senha: undefined,
        confSenha: undefined
    });


    const cadastro = () => {
        const { nome, cpf, email, senha, confSenha } = state;
        if(!!nome && !!cpf && !!email && !!senha && !!confSenha)
            if(senha === confSenha) {
                navigation.navigate({ name: 'User_Term', params: {
                    nome: nome, 
                    cpf: cpf, 
                    email: email, 
                    senha: senha 
                } })
            }
        else {

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
                        onChangeText={e => setState(prev => { return { ...prev, nome: e } })}
                        defaultValue={state.nome}
                    />
                </View>

                <View style={styles.bInput}>
                    <Text style={styles.bLabelTitle}>Email:</Text>
                    <TextInput
                        style={styles.bInputBox}
                        placeholder='Email'
                        onChangeText={e => setState(prev => { return { ...prev, email: e } })}
                        value={state.email}
                        keyboardType='email-address'
                    />
                </View>

                <View style={styles.bInput}>
                    <Text style={styles.bLabelTitle}>CPF:</Text>
                    <TextInput
                        style={styles.bInputBox}
                        placeholder='CPF'
                        onChangeText={e => setState(prev => { return { ...prev, cpf: e } })}
                        value={state.cpf}
                        keyboardType='decimal-pad'
                    />
                </View>

                <View style={styles.bInput}>
                    <Text style={styles.bLabelTitle}>Senha:</Text>                 
                    <TextInput
                        style={styles.bInputBox}
                        placeholder='Senha'
                        secureTextEntry={true}
                        value={state.senha}
                        onChangeText={e => setState(prev => { return { ...prev, senha: e } })}
                    />
                </View>

                <View style={styles.bInput}>
                    <Text style={styles.bLabelTitle}>Confirmar Senha:</Text>
                    <TextInput
                        style={styles.bInputBox}
                        placeholder='Confimar Senha'
                        secureTextEntry={true}
                        value={state.confSenha}
                        onChangeText={e => setState(prev => { return { ...prev, confSenha: e } })}
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