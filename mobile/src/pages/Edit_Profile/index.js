import React, { useState } from 'react';
import { View, Text,TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faCircleUser, faUserPen, faTriangleExclamation, faEye, faEyeSlash, faKey,
  faPenToSquare, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { PopUpActions, PopUpAlert, BottomSheetImage, CheckBox } from '../../components'
import { useAuth } from '../../contexts/Auth';
import styles from './styles';


const Edit_Profile = () => {
  const authData = JSON.parse(useAuth().authData);
  const { updateAuth, deleteAuth } = useAuth();

  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfPassword, setShowConfPassword ] = useState(false);
  

  const [ data, setData ] = useState({
    _id: authData._id || undefined,
    nome: authData.nome || undefined,
    cpf: authData.cpf || undefined,
    email: authData.email || undefined,
    senha: undefined,
    confSenha: undefined,
    popup_notify: authData.popup_notify || undefined ,
    push_notify: authData.push_notify || undefined
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

  const [ imagem, setImagem ] = useState({ base64: authData?.imagem })
  const [ imageModal, setImageModal ] = useState(false)
  const update = async () => {
    const { _id: id, nome, email, cpf: cpf_aux, senha, confSenha, popup_notify, push_notify } = data;
    if(!!nome && !!email && !!cpf_aux) {
      if((!senha && !confSenha) || senha === confSenha) {
        const cpf = cpf_aux.split('.-').join('');
        updateAuth({
          id, nome, email, cpf, imagem: imagem, senha,
          senha_prev: authData.senha, popup_notify, push_notify
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
  }

  const imageOptions = () => {
    setImageModal(true)
  }

  return (
    <>
      { 
        !!popUpData.buttonSecondaryTitle
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
                {
                  !!imagem?.base64
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

            <Text style={styles.bTitle}>Dados cadastrais</Text>
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
                keyboardType='numeric'
                placeholder='Insira seu CPF'
                value={data.cpf}
                onChangeText={value => setData(prev => { return {...prev, cpf: value.split(/[.,-]/).join('')} })}
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

            <Text style={styles.bTitle}>Notificações</Text>
            <View style={styles.bNotification}>
              <CheckBox
                title='Receber dicas de uso'
                checked={data.push_notify}
                onPress={()=> setData(prev => ({...prev, push_notify: !prev.push_notify}))}
                />
              <CheckBox
                title='Receber ocorrência mais recente'
                checked={data.popup_notify}
                onPress={()=> setData(prev => ({...prev, popup_notify: !prev.popup_notify}))}
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
              }}
            >
              <Text style={styles.bLabel}>Salvar Alterações</Text>
            </TouchableOpacity>

            <View style={styles.lineStyle} />

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
              <FontAwesomeIcon icon={faTrashCan} size={20} color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Edit_Profile;