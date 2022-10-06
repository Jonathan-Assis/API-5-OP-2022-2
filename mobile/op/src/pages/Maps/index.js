import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Loading, PopUpAlert } from '../../components'
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { latlng } from "../Registros/axios";
import { categorias } from "../Registros/categorias";
import styles from "./styles";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faXmark, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import GeoIcon from "../../assets/Icons/geo-alt";
import GeoIconFill from "../../assets/Icons/geo-alt-fill";

const Maps = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState({});
  const [loading,setLoading] = useState(false)
  const [pinSelected, setPinSelected] = useState(false);
  const [origin, setOrigin] = useState();
  const [coordinate, setCoordinate] = useState({});
  const [markers, setMarkers] = useState(latlng);
  const [filterMarkers, setFilterMarkers] = useState("");

  const filterData = markers.filter((e) => e.category === filterMarkers);

 
  const close = () =>{
  navigation.goBack()
  setVisible(false)
  }
  const [visible,setVisible]=useState(false)



  useEffect(() => {
    permission();
  }, []);

  const permission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
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
        setVisible(true)
      }
    }

    //let backPerm = await Location.requestBackgroundPermissionsAsync();
    //console.log(backPerm);
  };

  return (
    <>
        <PopUpAlert 
         icon={
          <FontAwesomeIcon icon={faLocationDot} size={60} color='white' />
          }
          title='Permissão de Localização Negada! ' 
          description='É necessário a habilitar a permissão de localização para o uso do Mapa.'
          buttonPrimaryTitle='Fechar'
          onClose={close}
          visible={visible}
          setVisible={setVisible}
        />
      <Loading loading={loading}>
        <MapView
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
          {pinSelected && (
            <Marker
            pinColor='#3429A8'
            coordinate={pin}
            onPress={(e) => {
              setPinSelected(false);
            }}
            />
            )}

          {(filterMarkers ? filterData : markers).map((item) => {
            return (
              <Marker
              key={item.id}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              /* onPress={()=>{
                navigation.navigate("Rep_Ocorrencia", item)
                //console.log('item',item)
              }} */
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
                    navigation.navigate({
                      name: "Rep_Ocorrencia",
                      params: {
                        coordinate: coordinate,
                      },
                    });
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