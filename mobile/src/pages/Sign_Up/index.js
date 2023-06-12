import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Loading, PopUpAlert, CheckBox, PopUpTermos, ProgressBar } from '../../components'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash, faKey, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import ServerConnection from '../../services'
import { useAuth } from '../../contexts/Auth'
import { useFormattedCPF } from '../../util/formatField'
import { validatePassword } from '../../util/validate'

const Sign_Up = () => {
    const navigation = useNavigation();
    const [formattedCPF, cpfNumbers, setCpf] = useFormattedCPF('');

    const [ loading, setLoading ] = useState(false);
    const { signUp } = useAuth()
    
    const [ alert, setAlert ] = useState(undefined);
    const [ alertVisible, setVisible ] = useState(false);
    
    const [ showPassword, setShowPassword ] = useState(false);
    const [ showConfPassword, setShowConfPassword ] = useState(false);
    const [ showTermos, setShowTermos ] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState([])
    const [aboutTerms,setAboutTerms] = useState({})
    const [ state, setState ] = useState({
        nome: undefined,
        email: undefined,
        senha: '',
        confSenha: '',
        notificacao: false,
        terms: false,
    });
    const { strengthText } = validatePassword(state.senha);

    const cadastro = async () => {
        const { nome, email, senha, confSenha, notificacao } = state;
        if(!!nome && !!cpfNumbers && !!email && !!senha && !!confSenha && !!termsAccepted) {
            if(senha === confSenha) {
                const cpf = cpfNumbers;
                const termos = [Object.assign(termsAccepted, aboutTerms)]
                setLoading(true);
                ServerConnection.validarCpf(cpf)
                .then(({ data }) => {
                    if(data) {
                        signUp(nome, cpf, email, senha, notificacao, termos)
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
            <PopUpTermos
                setIsAccepted={e => setState(prev => { return { ...prev, terms: e } })}
                termsAccepted={termsAccepted}
                accepted={Object.values(termsAccepted).some(e => true === e)}
                setTermsAccepted={setTermsAccepted}
                aboutTerms={aboutTerms}
                setAboutTerms={setAboutTerms}
                visible={showTermos} 
                setVisible={setShowTermos}
            />
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
                        <TextInput
                            style={styles.bInputBox} 
                            placeholder='000.000.000-00'
                            keyboardType='numeric'
                            maxLength={14}
                            value={formattedCPF}
                            onChangeText={setCpf}
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
                                onChangeText={e => {
                                    setState(prev => { return { ...prev, senha: e } })
                                }}
                            />
                            <TouchableOpacity
                                style={styles.bPasswordIcon}
                                onPress={() => setShowPassword(prev => !prev)}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} size={30} color='black'/>
                            </TouchableOpacity>
                        </View>
                            <ProgressBar strength={strengthText} />
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
                    <CheckBox
                        title='Desejo receber notícias e dicas'
                        checked={state.notificacao}
                        onPress={()=> setState(prev => ({...prev, notificacao: !prev.notificacao}))}
                    />
                    <CheckBox 
                        title='Declaro que li e aceito os termos de uso'
                        checked={state.terms}
                        onPress={()=> setShowTermos(true)}
                    />

                    <TouchableOpacity
                        style={styles.bButton}
                        onPress={cadastro}
                    >
                        <Text style={styles.bLabel}>
                            Confirmar Cadastro
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.footer}>
                        <Text style={styles.fDescription}>Já possui uma conta? </Text>
                        <Pressable
                            onPress={()=> navigation.goBack()}
                        >
                            <Text style={styles.fDescriptionLogin}>Faça o Login</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </Loading>
    );
}

export default Sign_Up