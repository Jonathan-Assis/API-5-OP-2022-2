import React, { useState, useEffect } from "react";
import { StatusBar, Alert, View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import {useNavigation} from '@react-navigation/native'
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import styles from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faXmark, faLocationCrosshairs} from '@fortawesome/free-solid-svg-icons'
import {latlng} from '../Registros/axios'
import {categorias} from '../Registros/categorias'

import GeoIcon from '../../assets/Icons/geo-alt'
import GeoIconFill from '../../assets/Icons/geo-alt-fill'

const Maps = () => {
  const navigation = useNavigation()
    const [alfinete, setAlfinete] = useState({latitude: 0, longitude: 0});
    const [currentLocation, setCurrentLocation] = useState({})
    const [pinLocation, setPinLocation] = useState({})
    const [origin, setOrigin] = useState();
    const [region, setRegion]=useState({})
    const [coord, setCoord] = useState({});
    const [markers,setMarkers]= useState(latlng)
    const [filterMarkers, setFilterMarkers] = useState('')
    const [pinSelected,setPinSelected] = useState(false)

    useEffect(() => {
        //CheckIfLocationEnabled();
        getCurrentPosition();
        getPinLocation(alfinete);
    }, []); 


    //console.log(markers)
    
    const filterData = markers.filter(e => e.category === filterMarkers)


      
      /*     const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        
        if (!enabled) {
          Alert.alert(
            "A Localização está desativada",
            "Por favor, ative a para continuar",
            [{ text: "Ok" }],
            { cancelable: false }
            );
          } else {
            setLocationServiceEnabled(enabled);
          }
        }; */
/*     const getLocation = async ()=> {
      
      if(coord !== {}){
        let response = await Location.reverseGeocodeAsync({
          latitude: coord.latitude,
          longitude: coord.longitude,
        });
        

        let res = response[0]
          setCoordLocation({
            cep: res.postalCode,
            region: res.region,
            subregion: res.subregion,
            district: res.district,
            street: res.street,
            number: res.streetNumber,
          }) 
      }
    } */

/*     useEffect( async () =>{

        let { status } = await Location.requestForegroundPermissionsAsync();
    
        if (status !== "granted") {
          Alert.alert("Permissão negada!", "A permissão de acesso a localização foi negada.", [{ text: "Ok" }],);
        }
    },[])


 */




    async function getPinLocation(){
     await Location.reverseGeocodeAsync({
      latitude: alfinete.latitude,
      longitude: alfinete.longitude
    }).then((e) => e)
      .then(data => {
        let getPinAddress = data[0]
        setPinLocation({
          cep: getPinAddress.postalCode,
          region: getPinAddress.region,
          subregion: getPinAddress.subregion,
          district: getPinAddress.district,
          street: getPinAddress.street,
          number: getPinAddress.streetNumber,
          latitude: alfinete.latitude, 
          longitude: alfinete.longitude
        }); 
        console.log('endereço',pinLocation)
      }).catch((err) => {
        console.log('erro',err);
      })
      }

    //const ad = await pinAddress.concat()
    /* .then( (e) =>{

       let getPinAddress = pinAddress[0]
      setPinLocation({
        cep: getPinAddress.postalCode,
        region: getPinAddress.region,
        subregion: getPinAddress.subregion,
        district: getPinAddress.district,
        street: getPinAddress.street,
        number: getPinAddress.streetNumber,
        latitude: alfinete.latitude, 
        longitude: alfinete.longitude
      }); 
      
    }).catch((err) => {
      console.log(err);
      
    }) */
    //console.log('teste', ad);
  

/* 
    const getPinLocation = async ()=>{
      const pinAddress = await Location.reverseGeocodeAsync({
        latitude: alfinete.latitude,
        longitude: alfinete.longitude
      });
      let getPinAddress = pinAddress[0]
      setPinLocation({
        cep: getPinAddress.postalCode,
        region: getPinAddress.region,
        subregion: getPinAddress.subregion,
        district: getPinAddress.district,
        street: getPinAddress.street,
        number: getPinAddress.streetNumber,
        latitude: alfinete.latitude, 
        longitude: alfinete.longitude
      });
      console.log(pinAddress);
    } */


   const getCurrentPosition = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
    
        if (status !== "granted") {
          Alert.alert("Permissão negada!", "A permissão de acesso a localização foi negada.", [{ text: "Ok" }],);
        }
          
          const { coords } = await Location.getCurrentPositionAsync({
            enableHighAccuracy: true,
          });
          
          const address = await Location.reverseGeocodeAsync({
            latitude: coords.latitude,
            longitude: coords.longitude
          });
        /*   let addressSetLocation = address[0]
          setCurrentLocation({
          cep: addressSetLocation.postalCode,
          region: addressSetLocation.region,
          subregion: addressSetLocation.subregion,
          district: addressSetLocation.district,
          street: addressSetLocation.street,
          number: addressSetLocation.streetNumber,
          latitude: coords.latitude, 
          longitude: coords.longitude
        }); */


        // console.log('local é', currentLocation)
        if (coords) {
          const { latitude, longitude } = coords;
          // console.log('response do mapa:',response)
          setOrigin({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta:  0.0035,
            longitudeDelta: 0.0035,
          });
          //setAlfinete({latitude: coords.latitude, longitude: coords.longitude})
          setCoord({latitude: coords.latitude, longitude: coords.longitude})
        }
        
      } 

      //console.log(alfinete)

      //console.log(filterMarkers)
    return (
      <>
      <MapView style={{flex:1}}
          initialRegion={origin}
          showsUserLocation={true}
          region={origin}
          zoomEnabled={true}
          loadingEnabled={true}
          mapType="hybrid"
          onPress={(e) => {
            getPinLocation()
            setAlfinete(e.nativeEvent.coordinate);
            setCoord(e.nativeEvent.coordinate);
            setPinSelected(true)
          }}
          >
          {pinSelected &&
            <Marker 
            coordinate={alfinete}
            onPress={(e) => {
              setRegion(e.nativeEvent.coordinate)
              setPinSelected(false)
/*               navigation.navigate({
  name: "Rep_Ocorrencia",
  params: {
    pin: pinLocation
  }
}) */
            // console.log(region)
            }}
            />
            }

            {(filterMarkers ? filterData : markers).map((item)=>{
              return (
              <Marker 
                key={item.id}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude
                }}
                /* onPress={()=>{
                  navigation.navigate("Rep_Ocorrencia", item)
                  //console.log('item',item)
                }} */
              />
              )
            })}
        </MapView>
        <View style={styles.container}>
        <View style={styles.footer}>
         { pinSelected
         ?
          <View style={styles.fButtons}>
            <TouchableOpacity style={styles.fButtonSecondary}
             onPress={() => 
               setPinSelected(false)
              }
              >
              <GeoIcon size={22} fill='black' />
              <Text style={styles.fButtonLabelSecondary}>Remover </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fButtonPrimary}
             onPress={() => {
               navigation.navigate({
                 name: "Rep_Ocorrencia",
                 params: {
                  map: pinLocation
                  }
                }) 
                // console.log(region)
              }}
              >
              <GeoIconFill size={22} fill='white' />
              <Text style={styles.fButtonLabelPrimary}>Confirmar</Text>
            </TouchableOpacity>
            </View>
            :
            <View style={styles.fButtons}>
            <TouchableOpacity style={styles.fButtonSecondary}
             onPress={() => 
              navigation.goBack()              
             }
            >
              <FontAwesomeIcon icon={faXmark} size={25} color='black' />
              <Text style={styles.fButtonLabelSecondary}>Cancelar </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fButtonPrimary}
            onPress={() => {
              navigation.navigate({
                name: "Rep_Ocorrencia",
                params: {
                  map: currentLocation
                }
              }) 
              // console.log(region)
            }}
              >
              <GeoIconFill size={22} fill='white' />
              <Text style={styles.fButtonLabelPrimary}>Local Atual</Text>
            </TouchableOpacity>
            </View>

            }



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
    </>
  )
}

export default Maps;