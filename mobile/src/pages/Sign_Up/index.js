import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Loading, PopUpAlert } from '../../components';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash, faKey, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import ServerConnection from '../../services';
import { TextInputMask } from 'react-native-masked-text';

const Sign_Up = () => {
    const navigation = useNavigation();
    const [ loading, setLoading ] = useState(false);
    
    const [ alert, setAlert ] = useState(undefined);
    const [ alertVisible, setVisible ] = useState(false);
    
    const [ showPassword, setShowPassword ] = useState(false);
    const [ showConfPassword, setShowConfPassword ] = useState(false);

    let cpfField = null

    const [ state, setState ] = useState({
        nome: undefined,
        cpf: undefined,
        email: undefined,
        senha: undefined,
        confSenha: undefined
    });

    const cadastro = async () => {
        const { nome, cpf, email, senha, confSenha } = state;
        if(!!nome && !!cpf && !!email && !!senha && !!confSenha) {
            if(senha === confSenha) {
                setLoading(true);
                ServerConnection.validarCpf({ cpf: cpf })
                .then(({ data }) => {
                    if(data.result) {
                        navigation.navigate({
                            name: 'User_Term', params: {
                                nome: nome, 
                                cpf: cpf, 
                                email: email, 
                                senha: senha 
                            }
                        });
                    }
                    else {
                        !alert && setAlert({
                            icon: faTriangleExclamation,
                            title: 'Cidadão já Cadastrado',
                            description: 'O CPF informado já está cadastrado.',
                            buttonPrimaryTitle: 'Fechar',
                            onClose: setVisible
                        });
                        setVisible(true);
                    }
                })
                .finally(() => setLoading(false));
            }
            else {
                !alert && setAlert({
                    icon: faKey,
                    title: 'Senhas Diferentes',
                    description: 'As senhas informadas são diferentes.',
                    buttonPrimaryTitle: 'Fechar',
                    onClose: setVisible
                });
                setVisible(true);
            }
            if (!cpfField.isValid()){
                !alert && setAlert({
                    icon: faTriangleExclamation,
                    title: 'CPF Muito Pequeno',
                    description: 'O CPF deve conter no mínimo 11 digitos.',
                    buttonPrimaryTitle: 'Fechar',
                    onClose: setVisible
                });
                setVisible(true);
            }
        }
        else {
            !alert && setAlert({
                icon: faTriangleExclamation,
                title: 'Campo(s) Obrigatório(s) Vazio(s)',
                description: 'Informe um nome, email, CPF e senha.',
                buttonPrimaryTitle: 'Fechar',
                onClose: setVisible
            });
            setVisible(true);
        }
    }

    return (
        <Loading loading={loading}>
            {alertVisible &&
                <PopUpAlert
                    icon={
                        <FontAwesomeIcon icon={alert.icon} size={60} color='white'/>
                    }
                    title={alert.title}
                    description={alert.description}
                    buttonPrimaryTitle={alert.buttonPrimaryTitle}
                    onClose={alert.onClose}
                    visible={alertVisible}
                    setVisible={setVisible}
                />
            }

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
                        <TextInputMask
                            style={styles.bInputBox} 
                            type={'cpf'}
                            placeholder='000.000.000-00'
                            onChangeText={
                            e => {setState(prev => { return { ...prev, cpf: e}})}
                            }
                            value={state.cpf}
                            keyboardType='decimal-pad'
                            ref={(ref) => cpfField = ref}
                        />
                    </View>

                    <View style={styles.bInput}>
                        <Text style={styles.bLabelTitle}>Senha:</Text>                 
                        <View style={styles.bInputPassword}>
                            <TextInput
                                style={styles.bInputPasswordBox}
                                placeholder='Senha'
                                secureTextEntry={!showPassword}
                                value={state.senha}
                                onChangeText={e => setState(prev => { return { ...prev, senha: e } })}
                            />
                            
                            <TouchableOpacity
                                style={styles.bPasswordIcon}
                                onPress={() => setShowPassword(prev => !prev)}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} size={30} color='black'/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.bInput}>
                        <Text style={styles.bLabelTitle}>Confirmar Senha:</Text>
                        <View style={styles.bInputPassword}>
                            <TextInput
                                style={styles.bInputPasswordBox}
                                placeholder='Confimar Senha'
                                secureTextEntry={!showConfPassword}
                                value={state.confSenha}
                                onChangeText={e => setState(prev => { return { ...prev, confSenha: e } })}
                            />

                            <TouchableOpacity
                                style={styles.bPasswordIcon}
                                onPress={() => setShowConfPassword(prev => !prev)}
                            >
                                <FontAwesomeIcon icon={showConfPassword ? faEye : faEyeSlash} size={30} color='black'/>
                            </TouchableOpacity>
                        </View>
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
        </Loading>
    );
}

export default Sign_Up