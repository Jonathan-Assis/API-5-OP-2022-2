import React,{useState, useEffect} from 'react';
import { View, Text,TextInput, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faCircleUser, faUserPen, faTriangleExclamation, faPlus, faXmark, faEye, faEyeSlash, faKey,
  faPenToSquare, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { PopUpActions, PopUpAlert, BottomSheetImage } from '../../components'
import { useAuth } from '../../contexts/Auth';
import styles from './styles';
import { TextInputMask } from 'react-native-masked-text';


const Edit_Profile = () => {
  const authData = JSON.parse(useAuth().authData);
  const { updateAuth, deleteAuth } = useAuth();

  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfPassword, setShowConfPassword ] = useState(false);
  
  let cpfField = null


  const [ data, setData ] = useState({
    _id: authData._id || undefined,
    nome: authData.nome || undefined,
    cpf: authData.cpf || undefined,
    email: authData.email || undefined,
    senha: undefined,
    confSenha: undefined,
  });
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
  
  const update = async () => {
    const { _id: id, nome, email, cpf, senha, confSenha } = data;
    if(!!nome && !!email && !!cpf) {
      if((!senha && !confSenha) || senha === confSenha) {
        updateAuth({
          id, nome, email, cpf, imagem, senha,
          senha_prev: authData.senha
        }).then(() => {
          setVisible(false)
        })
      }
      else setPopUpData({
        onClose: setVisible,
        icon: faKey,
        title: 'Senhas diferentes',
        description: 'As senhas informadas são diferentes.',
        buttonPrimaryTitle: 'Fechar'
      });
    }
    else {
      setPopUpData({
        onClose: setVisible,
        icon: faTriangleExclamation,
        title: 'Falha ao Editar o Perfil',
        description: 'Informe um Nome, Email e CPF.',
        buttonPrimaryTitle: 'Fechar'
      });
    }
    if (!cpfField.isValid()){
      setPopUpData({
          onClose: setVisible,
          icon: faTriangleExclamation,
          title: 'CPF Não Existente',
          description: 'CPF pequeno demais ou inexistente.',
          buttonPrimaryTitle: 'Fechar',
      });
  }
  }

  const [ imagem, setImagem ] = useState({ base64: authData?.imagem })
  const [ imageModal, setImageModal ] = useState(false)

  const imageOptions = () => {
    setImageModal(true)
  }

  /* useEffect(() => {
    if(imagem) console.log(imagem)
  }, [imagem]) */

  return (
    <>
    {!!popUpData.buttonSecondaryTitle
    ? <PopUpActions 
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
    : <PopUpAlert
      icon={
        <FontAwesomeIcon icon={popUpData.icon} size={60} color='white' />
      }
      title={popUpData.title}
      description={popUpData.description}
      buttonPrimaryTitle={popUpData.buttonPrimaryTitle}
      onClose={popUpData.onClose}
      visible={visible}
      setVisible={setVisible}
    />
    }

    <BottomSheetImage
      imagem={imagem}
      setImagem={setImagem} 
      visible={imageModal}
      setVisible={setImageModal}
    />
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.body} > 
            <View style={styles.bImageIcon}>
              <TouchableOpacity 
                onPress={() =>{
                  imageOptions();
                }}
              >
                {!!imagem?.base64
                  ? <View style={styles.bImageIcon}>
                    <Image source={{uri: `${imagem?.base64}` }} resizeMode="cover" style={styles.bImageStyle}/>
                  </View>
                  : <FontAwesomeIcon icon={ faCircleUser } size={140} color={'#3429A8'}/>
                }
              </TouchableOpacity>

              <TouchableOpacity style={styles.bBottomImageButton}
                onPress={()=>{
                  !!imagem?.base64
                  ? setImagem(undefined)
                  : imageOptions()
                }}
                >
                <FontAwesomeIcon icon={!!imagem?.base64 ? faTrashCan : faPenToSquare} size={25} color='#3429A8' />
              </TouchableOpacity>
            </View>


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
            <TextInputMask
              type={'cpf'}
              style={styles.bInputBox}
              keyboardType='numeric'
              placeholder='Insira seu CPF'
              value={data.cpf}
              onChangeText={value => setData(prev => { return {...prev, cpf: value} })}
              ref={(ref) => cpfField = ref}
             />  
          </View>

          <View style={styles.bInput}>
            <Text style={styles.bTitle}>Senha:</Text>
            <View style={styles.bInputPassword}>
              <TextInput style={styles.bInputPasswordBox} 
                placeholder='Insira sua nova Senha'
                secureTextEntry={!showPassword}
                value={data.senha}
                onChangeText={value => setData(prev => { return {...prev, senha: value} })}
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
            <Text style={styles.bTitle}>Confirmar Senha:</Text>
            <View style={styles.bInputPassword}>
              <TextInput style={styles.bInputPasswordBox}
                placeholder='Insira novamente a Senha'
                secureTextEntry={!showConfPassword}
                value={data.confSenha}
                onChangeText={value => setData(prev => { return {...prev, confSenha: value} })}
              />

              <TouchableOpacity
                style={styles.bPasswordIcon}
                onPress={() => setShowConfPassword(prev => !prev)}
              >
                <FontAwesomeIcon icon={showConfPassword ? faEye : faEyeSlash} size={30} color='black'/>
              </TouchableOpacity>
            </View>
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
                onConfirm: () => deleteAuth({ id: data._id }),
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