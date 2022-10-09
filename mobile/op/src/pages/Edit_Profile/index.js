import React,{useState, useEffect} from 'react';
import { View, Text,TextInput, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleUser, faUserPen, faTriangleExclamation, faPlus, faXmark, faEye, faEyeSlash, faKey } from '@fortawesome/free-solid-svg-icons'
import { PopUpActions, PopUpAlert, BottomSheetImage } from '../../components'
import { useAuth } from '../../contexts/Auth'
import styles from './styles';

const Edit_Profile = () => {
  const authData = JSON.parse(useAuth().authData);
  const { updateAuth, deleteAuth } = useAuth();

  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfPassword, setShowConfPassword ] = useState(false);
  
  const [ data, setData ] = useState({
    _id: authData._id || undefined,
    nome: authData.nome || undefined,
    email: authData.email || undefined,
    cpf: authData.cpf || undefined,
    senha: undefined,
    confSenha: undefined
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
    const { _id, nome, email, cpf, senha, confSenha } = data;
    if(!!nome && !!email && !!cpf) {
      if((!senha && !confSenha) || senha === confSenha) {
        updateAuth({
          _id, nome, email, cpf, senha
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
      //Alert.alert('Falha ao editar o Perfil', 'Senhas diferentes');
    }
  }

  const [imagem,setImagem]=useState(false)
  const [imageModal,setImageModal] = useState(false)
  const imageOptions = () => {
    setImageModal(true)
  }
  
  const [imageSelected,setImageSelected]=useState(false)
  
  useEffect(() => {
    if(imagem === false || imagem.cancelled === true){
    }
    else if (imagem.cancelled == false) {
      setImageSelected(true)
    }
  },[imagem])

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

          { !imageSelected ? (
            <TouchableOpacity style={styles.bImage}
              onPress={() =>{
                imageOptions()
              }}
            >
              <FontAwesomeIcon icon={ faCircleUser } size={140} color={'#3429A8'}/>
              <View style={styles.hIconPlus}>
                    <FontAwesomeIcon icon={faPlus} size={60} color='#3429A8' />
              </View>
              <Text style={styles.bImageLabel}>Adicionar foto</Text>
            </TouchableOpacity>
            ) : (
              <>
              <TouchableOpacity style={{position:'absolute',alignItems: 'flex-end', top:10, right:10}}
                onPress={()=>{
                  setImageSelected(false)
                }}
                >
                <FontAwesomeIcon icon={faXmark} size={40} color='black' />
              </TouchableOpacity>
              <View style={styles.bImage}>
                <Image source={{uri:imagem.uri}} resizeMode="cover" style={{width:140,height:140,borderRadius: 100, overflow: "hidden", borderWidth: 2,borderColor:'#3429A8'}}/>
              </View>
            </>
          )}

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