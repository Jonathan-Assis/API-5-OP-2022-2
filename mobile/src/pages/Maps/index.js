import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Loading, PopUpAlert } from '../../components'
import * as Location from 'expo-location'
import { useNavigation } from '@react-navigation/native'
import ServerConnection from '../../services'
import styles from './styles'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import PinStrokeBlack from '../../assets/Icons/PinStrokeBlack.svg'

import GeoIcon from '../../assets/Icons/geo-alt'
import GeoIconFill from '../../assets/Icons/geo-alt-fill'
import { useAuth } from '../../contexts/Auth'

const Maps = (props) => {
  const navigation = useNavigation();
  const [pin, setPin] = useState({});
  const [loading,setLoading] = useState(false)
  const authData = JSON.parse(useAuth().authData)
  const { tokenData, signOut } = useAuth()
  const [pinSelected, setPinSelected] = useState(false);
  const [pinPosition,setPinPosition] = useState({})
  const [origin, setOrigin] = useState();
  const [currentCoords, setCurrentCoords] = useState({});
  const [currentLocation, setCurrentLocation] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});
  const [categoria,setCategoria] = useState([]);
  const [selectCurrent, setSelectCurrent]=useState(false)
    
  const [visible,setVisible]=useState(false)
  const [popUpPermission, setPopUpPermission] = useState({
    icon: undefined,
    title: undefined,
    description: undefined,
    buttonPrimaryTitle: undefined,
    buttonSecondaryTitle: undefined,
    onConfirm: ()=>{},
    onClose: ()=>{},
  })
 
  const close = () =>{
    navigation.goBack()
    setVisible(false)
  }
  
  useEffect(() => {
    getData()
    permission()
  }, []);

  useEffect(()=>{
    reverseGeoCodePin()
  },[pin])

  useEffect(()=>{
    reverseGeoCodeCurrent()
    .finally(()=>{
      if(Object.keys(currentLocation).length !== 0){
        navigation.navigate({
          name: "Rep_Ocorrencia",
          params: {
            coordinate: currentLocation,
            localidade: currentPosition
          },
        })
      } else {
        reverseGeoCodeCurrent()
      }
    })
  },[selectCurrent])
   
  const permission = async () => {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status !== "granted") {
      setPopUpPermission({
        onClose: close,
        icon: faLocationDot,
        title: 'Permissão Negada!',
        description: 'As permissões de localização foram negadas, é necessário aceitar as permissões para o uso mapa',
        buttonPrimaryTitle: 'Fechar'
      })
      setVisible(true)
    } else {
      try {
        const { coords } = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        if (coords) {
          setOrigin({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.004,
            longitudeDelta: 0.004,
          });
          } 
          setLoading(false)
        } catch(e) {
        setPopUpPermission({
          onClose: close,
          icon: faLocationDot,
          title: 'Localização Desativada!',
          description: 'Os serviços de localização estão desativados, é necessário ativar para utilizar o mapa.',
          buttonPrimaryTitle: 'Fechar'
        })
        setVisible(true)
      }
    }
  }

  const reverseGeoCodeCurrent = async () => {
    const { coords } = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    if (coords) {
      let resp = await Location.reverseGeocodeAsync({
          latitude: coords.latitude,
          longitude: coords.longitude,
        })
          setCurrentPosition({
            bairro: resp[0].district,
          })
          setCurrentLocation(coords)
    }
  } 

  const reverseGeoCodePin = async () => {
    if (Object.keys(pin).length !== 0) {
      await Location.reverseGeocodeAsync({
          latitude: pin.latitude,
          longitude: pin.longitude,
        }).then((data) => {
          setPinPosition({
            bairro: data[0].district,
          })
    })
  } }

  const [ocorrencias,setOcorrencias]= useState([])
  
  async function getData(){
    await ServerConnection.categorias(tokenData)
    .then(({data}) => {
      setCategoria(()=>{
        return [
          { tipo: 'Meus',
            color: '#4444EE'
          },
          ...data
        ]
      })
    })
    .then( async () => {
      await ServerConnection.getAllOcorrencia(tokenData)
      .then(({data}) => {
        setOcorrencias(data)
      })
    })
    .catch((e) => {
      console.log(e)
      if(e.response.status === 401){
        signOut();
      }
    })
  }

let categoriaSelected = props.route?.params.categoria

  return (
    <>
        <PopUpAlert 
         icon={
           <FontAwesomeIcon icon={popUpPermission.icon} size={60} color='white' />
          }
          title={popUpPermission.title}
          description={popUpPermission.description}
          buttonPrimaryTitle={popUpPermission.buttonPrimaryTitle}
          onClose={popUpPermission.onClose}
          visible={visible}
          setVisible={setVisible}
        />
      <Loading loading={loading}>
        <MapView
          initialRegion={origin}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          showsCompass={false}
          toolbarEnabled={false}
          style={{ flex: 1 }}
          region={origin}
          zoomEnabled={true}
          loadingEnabled={true}
          mapType="hybrid"
          onPress={(e) => {
            setPin(e.nativeEvent.coordinate);
            setPinSelected(true);
          }}
        >
       { 
        ocorrencias.map((item, index) => {
          const x = categoria.find(a => {
            return a?.tipo === item?.categoria
          })?.color
          const cor = item?.cidadao === authData._id ? '#4444EE' : x;
            return (
              <Marker
              key={index}
              title={item?.subCategoria}
              coordinate={{
                latitude: parseFloat(item?.local.latitude),
                longitude: parseFloat(item?.local.longitude),
              }}
              >
                <PinStrokeBlack style={{color: cor, width:23, height:32}} />
              </Marker>
              )
              }
            )}
           

          {pinSelected && (
              <Marker
              coordinate={pin}
              onPress={() => {
                setPinSelected(false);
              }}
              >
                <PinStrokeBlack style={{color: '#4444EE', width:23, height:32}} />
              </Marker>
              )}
        </MapView>
        <View style={styles.container}>
          <View style={styles.footer}>
            {pinSelected ? (
              <View style={styles.fButtons}>
                <TouchableOpacity
                  style={styles.fButtonSecondary}
                  onPress={() => {
                    setPinSelected(false);
                    setPin({});
                    setPinPosition({})
                  }}
                  >
                  <GeoIcon size={22} fill="black" />
                  <Text style={styles.fButtonLabelSecondary}>Remover </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.fButtonPrimary}
                  onPress={() => {
                    navigation.navigate({
                      name: "Rep_Ocorrencia",
                      params: {
                        coordinate: pin,
                        localidade: pinPosition
                      },
                    })                    
                  }}
                  >
                  <GeoIconFill size={22} fill="white" />
                  <Text style={styles.fButtonLabelPrimary}>Confirmar</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.fButtons}>
                <TouchableOpacity
                  style={styles.fButtonSecondary}
                  onPress={() => { 
                    navigation.goBack({
                      name: "Rep_Ocorrencia",
                      params: {
                        coordinate: null,
                        localidade: null
                      },
                    })
                  }}
                  >
                  <FontAwesomeIcon icon={faXmark} size={22} color="black" />
                  <Text style={styles.fButtonLabelSecondary}>Cancelar </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.fButtonPrimary}
                  event={true}
                  onPress={() => {
                    setSelectCurrent(true)
                    } 
                  }  
                  >
                  <GeoIconFill size={22} fill="white" />
                  <Text style={styles.fButtonLabelPrimary}>Local Atual</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Loading>
    </>
  );
}
;
  

export default Maps;