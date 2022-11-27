import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Loading, PopUpAlert } from '../../components'
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import ServerConnection from "../../services"
import styles from "./styles";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PinStrokeBlack from '../../assets/Icons/PinStrokeBlack.svg'

import GeoIcon from "../../assets/Icons/geo-alt";
import GeoIconFill from "../../assets/Icons/geo-alt-fill";
import { useAuth } from "../../contexts/Auth";

const Maps = (props) => {
  const navigation = useNavigation();
  const [pin, setPin] = useState({});
  const [loading,setLoading] = useState(false)
  const authData = JSON.parse(useAuth().authData)
  const [pinSelected, setPinSelected] = useState(false);
  const [pinData,setPinData] = useState({})
  const [origin, setOrigin] = useState();
  const [coordinate, setCoordinate] = useState({});
  const [localidade, setLocalidade] = useState({});
  const [categoria,setCategoria] = useState([]);
  
  // const filterData = ocorrencias.filter((e) => e.category === filterMarkers);
  
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
    setLoading(true);

    getData()
    permission()
    .finally(() => {
      setLoading(false); 
    })
  }, []);
   
  const permission = async () => {
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
        setLoading(true)
        const { coords } = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        if (coords) {
          setCoordinate({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
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
  
  async function reverseGeoCode(local){
   const reverse = await Location.reverseGeocodeAsync({
      latitude: local.latitude,
      longitude: local.longitude,
    }).then(async(data) => {
      setLocalidade({
        estado: data[0].region,
        municipio: data[0].subregion,
        bairro: data[0].district,
        rua: data[0].street,
      })
      if(Object.keys(localidade)< 0){
        reverse()
      }
    })
  }

  const [ocorrencias,setOcorrencias]= useState([])
  
  async function getData(){
    await ServerConnection.categorias()
    .then(({data}) => {
      setCategoria(()=>{
        return [
          { tipo: 'Meus',
            color: '#3429A8'
          },
          ...data
        ]
      })
    })
    .then( async () => {
      await ServerConnection.getAllOcorrencia()
      .then(({data}) => {
        const c = data
        c.map((item) => {
          if(item.categoria === categoriaSelected){
            setOcorrencias(item)
          }
        })
      })
    })
    .catch((err) => {
      console.log(err)
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
{/*         { 
        ocorrencias.map((item, index) => {
          const x = categoria.find(a => {
            return a?.tipo === item?.categoria
          })?.color
          const cor = item?.cidadao === authData._id ? '#3429A8' : x;
            return (
              <Marker
              key={index}
              title={item?.subCategoria}
              coordinate={{
                latitude: parseFloat(item?.local.latitude),
                longitude: parseFloat(item?.local.longitude),
              }}
              onPress={()=>{
                setPinData(item)
              }}
              >
                <PinStrokeBlack style={{color: cor, width:23, height:32}} />
              </Marker>
              )
              }
            )}
           */}

          {pinSelected && (
              <Marker
              coordinate={pin}
              onPress={() => {
                setPinSelected(false);
              }}
              >
                <PinStrokeBlack style={{color: '#3429A8', width:23, height:32}} />
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
                    setPin(null);
                    setLocalidade(null)
                  }}
                  >
                  <GeoIcon size={22} fill="black" />
                  <Text style={styles.fButtonLabelSecondary}>Remover </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.fButtonPrimary}
                  onPress={() => {
                    async function data() {
                      permission()
                      reverseGeoCode(pin)
                    }
                    data().then(() =>{ 
                    if(Object.keys(localidade) < 0){
                      reverseGeoCode(pin)
                    } else {
                    navigation.navigate({
                      name: "Rep_Ocorrencia",
                      params: {
                        coordinate: pin,
                        localidade: localidade
                      },
                    })
                  }
                  }
                    
                    )
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
                    async function foo() {
                      setPin(null);
                      setCoordinate(null);
                    }
                    foo().then(() => navigation.navigate({
                      name: "Rep_Ocorrencia",
                      params: {
                        coordinate: null,
                        localidade: null
                      },
                    }))
                  }}
                  >
                  <FontAwesomeIcon icon={faXmark} size={22} color="black" />
                  <Text style={styles.fButtonLabelSecondary}>Cancelar </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.fButtonPrimary}
                  event={true}
                  onPress={() => {
                    async function coord() {
                      permission()
                      reverseGeoCode(coordinate)
                    }
                    coord().then(() => navigation.navigate({
                        name: "Rep_Ocorrencia",
                        params: {
                          coordinate: coordinate,
                          localidade: localidade
                        },
                      }))
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
};

export default Maps;