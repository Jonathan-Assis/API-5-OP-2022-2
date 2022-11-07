import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Loading, PopUpAlert } from '../../components'
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import ServerConnection from "../../services"
import styles from "./styles";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import GeoIcon from "../../assets/Icons/geo-alt";
import GeoIconFill from "../../assets/Icons/geo-alt-fill";

const Maps = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState({});
  const [loading,setLoading] = useState(false)
  const [pinSelected, setPinSelected] = useState(false);
  const [origin, setOrigin] = useState();
  const [coordinate, setCoordinate] = useState({});
  const [filterMarkers, setFilterMarkers] = useState("");
  
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
    getOcorrencias().then(() => {
       permission();
    }) 
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
   const [ocorrencias,setOcorrencias]= useState([])
  
  async function getOcorrencias(){
    await ServerConnection.getAllOcorrencia()
    .then(({data}) => {
      setOcorrencias(data)
    })
    .catch(() => {
    })
  } 

  
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
          showsCompass={false}
          toolbarEnabled={false}
          style={{ flex: 1 }}
          initialRegion={origin}
          showsUserLocation={true}
          region={origin}
          zoomEnabled={true}
          loadingEnabled={true}
          mapType="hybrid"
          onPress={(e) => {
            setPin(e.nativeEvent.coordinate);
            setPinSelected(true);
          }}
        >
          {/* { (ocorrencias).map((item)=>{
            return(
              <Marker
                key={item._id}
                coordinate={{
                  latitude: item.local.latitude,
                  longitude: item.local.longitude,
                }}
              />
            )}
          )} */}
            {pinSelected && (
              <Marker
              pinColor='#3429A8'
              coordinate={pin}
              onPress={(e) => {
                setPinSelected(false);
              }}
              />
              )}

        {(filterMarkers ? filterData : ocorrencias).map((item) => {
            return (
              <Marker
                key={item._id}
                coordinate={{
                  latitude: item.local.latitude,
                  longitude: item.local.longitude,
                }}
               onPress={()=>{
                //navigation.navigate("Rep_Ocorrencia", item)
                //console.log('item',item)
              }} 
              />
              );
            })}
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
                      },
                    });
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
                      permission()
                  }}
                >
                  <GeoIconFill size={22} fill="white" />
                  <Text style={styles.fButtonLabelPrimary}>Local Atual</Text>
                </TouchableOpacity>
              </View>
            )}

            {/*           <FlatList 
              data={categorias}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={()=><View style={{width:10}}/>}
              contentContainerStyle={{
                alignItems: 'center'
              }}
              renderItem={({ item }) => (
                <TouchableOpacity style={[
                  styles.fCategory,
                  filterMarkers === item.key ? styles.fSelectedCategory : null
                ]}
                key={item.key}
                onPress={()=>{
                  setFilterMarkers(filterMarkers === item.key ? "" : item.key);
                }}
                >
                {item.icon}
                <Text style={[
                  styles.fSubCategoryTitle,
                  filterMarkers === item.key ? styles.fSelectedCategoryTitle : null
                ]}>{item.label}</Text>
                </TouchableOpacity>
                )}
              /> */}
          </View>
        </View>
      </Loading>
    </>
  );
};

export default Maps;