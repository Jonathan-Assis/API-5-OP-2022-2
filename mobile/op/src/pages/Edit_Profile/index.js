import React,{useState} from 'react';
import { View, Text,TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleUser, faUserPen, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { PopUpActions, BottomSheetImage } from '../../components'
import { useAuth } from '../../contexts/Auth'
import styles from './styles';

const Edit_Profile = () => {
  const authData = JSON.parse(useAuth().authData);
  const { updateAuth, deleteAuth } = useAuth();

  const [ data, setData ] = useState({
    id: authData._id || undefined,
    nome: authData.nome || undefined,
    email: authData.email || undefined,
    cpf: authData.cpf || undefined,
    senha: undefined,
    confSenha: undefined
  });

  const update = async () => {
    const { id, nome, email, cpf, senha, confSenha } = data;
    if(senha === confSenha) {
      if(!!nome && !!email && !!cpf) {
        let aux = !!senha ? senha : authData.senha;
        updateAuth({
          id, nome, email, cpf, senha: aux
        }).then(() => {
          setVisible(false)
        })
      }
      else Alert.alert('Falha ao editar o Perfil', 'Informe um Nome, Email e CPF');
    }
    else Alert.alert('Falha ao editar o Perfil', 'Senhas diferentes');
  }

  const [visible,setVisible]=useState(false)
  const [popUpData, setPopUpData] = useState({
    icon: undefined,
    title: undefined,
    description: undefined,
    buttonPrimaryTitle: undefined,
    buttonSecondaryTitle: undefined,
    onConfirm: ()=>{},
    onClose: ()=>{},
  }) 

  const [imageModal,setImageModal] = useState(false)
  const imageOptions = () => {
    setImageModal(true)
  }

  return (
    <>
     <PopUpActions 
        icon={
          <FontAwesomeIcon icon={popUpData.icon} size={60} color='white' />
        }
        title={popUpData.title}
        description={popUpData.description}
        buttonPrimaryTitle={popUpData.buttonPrimaryTitle}
        buttonSecondaryTitle={popUpData.buttonSecondaryTitle}
        onConfirm={popUpData.onConfirm}
        onClose={popUpData.onClose}
        visible={visible}
        setVisible={setVisible}
      />
    <BottomSheetImage 
      visible={imageModal}
      setVisible={setImageModal}
    />
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.body} > 

          <TouchableOpacity style={styles.bImage}
            onPress={() =>{
              imageOptions()
            }}
          >
            <FontAwesomeIcon icon={ faCircleUser } size={120} color={'#3429A8'}/>
            <Text style={styles.bImageLabel}>Adicionar foto</Text>
          </TouchableOpacity>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Nome:</Text>  
            <TextInput
              style={styles.bInputBox}
              placeholder='Nome Completo'
              defaultValue={data.nome}
              onChangeText={value => setData(prev => { return {...prev, nome: value} })}
              />
          </View>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Email:</Text>
            <TextInput
              style={styles.bInputBox}
              placeholder='Insira seu Email'
              value={data.email}
              onChangeText={value => setData(prev => { return {...prev, email: value} })}
              />
          </View>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>CPF:</Text>
            <TextInput
              style={styles.bInputBox}
              placeholder='Insira seu CPF'
              value={data.cpf}
              onChangeText={value => setData(prev => { return {...prev, cpf: value} })}
              />  
          </View>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Senha:</Text>  
            <TextInput style={styles.bInputBox} 
              placeholder='Insira sua nova Senha'
              secureTextEntry={true}
              value={data.senha}
              onChangeText={value => setData(prev => { return {...prev, senha: value} })}
              />
          </View>  
          
          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Confirmar Senha:</Text>  
            <TextInput style={styles.bInputBox}
              placeholder='Insira novamente a Senha'
              secureTextEntry={true}
              value={data.confSenha}
              onChangeText={value => setData(prev => { return {...prev, confSenha: value} })}
              />
          </View>

          <TouchableOpacity style={styles.bButton}
            onPress={()=>{
              setPopUpData({
                onConfirm:update,
                onClose: setVisible,
                icon: faUserPen,
                title:'Deseja Salvar as Alterações?',
                buttonPrimaryTitle: 'Salvar',
                buttonSecondaryTitle: 'Cancelar'
              })
              setVisible(true)
            }}>
            <Text style={styles.bLabel}>Salvar Alterações</Text>
          </TouchableOpacity >

          <TouchableOpacity style={styles.bButton}
            onPress={() => {
              setPopUpData({
                onConfirm: () => deleteAuth({ id: data.id }),
                onClose: setVisible,
                icon: faTriangleExclamation,
                title:'Deseja Excluir Sua Conta?',
                description: 'Ao excluir sua conta, todos os dados salvos serão permanentemente deletados!',
                buttonPrimaryTitle: 'Deletar',
                buttonSecondaryTitle: 'Cancelar'
              })
              setVisible(true)
            }}
            >
            <Text style={styles.bLabel}>Deletar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </>
  );
}

export default Edit_Profile;