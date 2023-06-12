import React, { useState } from 'react'
import { View, Text,TextInput, TouchableOpacity, ScrollView, Image, Button } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faCircleUser, faUserPen, faTriangleExclamation, faEye, faEyeSlash, faKey,
  faPenToSquare, faTrashCan, faCheck
} from '@fortawesome/free-solid-svg-icons'
import { PopUpActions, PopUpAlert, BottomSheetImage, CheckBox, Loading, PopUpChangeTermos, PopUpShowTermo } from '../../components'
import { useAuth } from '../../contexts/Auth'
import styles from './styles'
import { useFormattedCPF } from '../../util/formatField'


const Edit_Profile = () => {
  const authData = JSON.parse(useAuth().authData)
  const { updateAuth, deleteAuth } = useAuth();
  const [formattedCPF, cpfNumbers, setCpf] = useFormattedCPF(authData.cpf || '');

  const [loading, setLoading]=useState(false)

  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfPassword, setShowConfPassword ] = useState(false);


  const [ data, setData ] = useState({
    _id: authData._id || undefined,
    nome: authData.nome || undefined,
    email: authData.email || undefined,
    senha: undefined,
    confSenha: undefined,
    notificacao: authData.notificacao ||  {
      push: undefined,
      popup: undefined
    },
    termos: authData.termos ?? []
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
    const {
      _id: id,
      nome,
      email,
      senha,
      confSenha,
      notificacao,
      termos
    } = data;

    if(!!nome && !!email && !!cpfNumbers) {
      if((!senha && !confSenha) || senha === confSenha) {
        const cpf = cpfNumbers;
        updateAuth({
          id, nome, email, cpf, imagem: imagem, senha,
          senha_prev: authData.senha, notificacao: JSON.stringify(notificacao),
          termos: JSON.stringify(termos)
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

  const [ termsPopUp, setTermsPopUp ] = useState(false)
  const [ termsData, setTermsData ] = useState()
  const [termsAccepted, setTermsAccepted] = useState([])

  const [ showTermos, setShowTermos ] = useState(false)
  const [ showOldTerms, setShowOldTerms ] = useState(false);

  return (
    <>
   { loading ? (
     <Loading loading={loading} />
   ) : (
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

      <PopUpChangeTermos 
        visible={termsPopUp}
        setVisible={setTermsPopUp}
        setTermsData={setTermsData}
      />

      {showTermos && <PopUpShowTermo
        termo_id={termsData.lastTermo}
        visible={showTermos}
        setVisible={setShowTermos}
        prevAccepted={data.termos.find(a => a.id === termsData.lastTermo) ?? []}
        setTermChange={e => {
          const index = data.termos.findIndex(a => a.id === termsData.lastTermo)

          if(index >= 0) {
            data.termos.splice(index, 1, {
              ...e,
              id: data.termos[index].id,
              acceptedAt: new Date().toISOString()
            })
          }
          else {
            data.termos.unshift({
              ...e,
              id: termsData.lastTermo,
              acceptedAt: new Date().toISOString()
            })
          }
        }}
        accepted={Object.values(termsAccepted).some(e => e === true)}
        termsAccepted={termsAccepted}
        setTermsAccepted={setTermsAccepted}
      />}

      {showOldTerms && <PopUpShowTermo
        termo_id={data.termos[0].id}
        old={true}
        visible={showOldTerms}
        setVisible={setShowOldTerms}
        prevAccepted={data.termos[0]}
        termsAccepted={termsAccepted}
        setTermsAccepted={setTermsAccepted}
      />}

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
                    : <FontAwesomeIcon icon={ faCircleUser } size={140} color={'#4444EE'}/>
                }
              </TouchableOpacity>

              <TouchableOpacity style={styles.bBottomImageButton}
                onPress={()=>{
                  !!imagem?.base64
                  ? setImagem(undefined)
                  : imageOptions()
                }}
                >
                <FontAwesomeIcon icon={!!imagem?.base64 ? faTrashCan : faPenToSquare} size={25} color='#4444EE' />
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
                value={formattedCPF}
                onChangeText={setCpf}
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
                checked={data.notificacao.push}
                onPress={()=> setData(prev => ({...prev, notificacao:{ 
                  push:!prev.notificacao.push,
                  popup:prev.notificacao.popup,
                }}))}
                />
              <CheckBox
                title='Receber ocorrência mais recente'
                checked={data.notificacao.popup}
                onPress={()=> setData(prev => ({...prev, notificacao:{ 
                  push:prev.notificacao.push,
                  popup:!prev.notificacao.popup,
                }}))}
              />
              <CheckBox
                title='Declaro que li e aceito os termos de uso'
                checked={Object.values(data.termos[0]).some(e => e === true)}
                onPress={()=> setShowTermos(true)}
              />

              {!!termsData && termsData.lastTermo !== data.termos[0].id &&//mudar depois
                <TouchableOpacity style={styles.bTermsAttached} onPress={() => setShowOldTerms(true)}>
                <Text style={styles.bAttachedLabel}>Última vesão dos Termos de Uso</Text>
              </TouchableOpacity>}
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
              <FontAwesomeIcon icon={faCheck} size={20} color='white' />
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
    )}
    </>
  );
}

export default Edit_Profile;