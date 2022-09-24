import React, { useState, useEffect } from "react";
import { Alert, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const Maps = () => {
    const [alfinete, setAlfinete] = useState({latitude: 0, longitude: 0});
    const [currentLocation, setCurrentLocation] = useState({})
    const [pinLocation, setPinLocation] = useState({})
    const [origin, setOrigin] = useState();
    const [coord, setCoord] = useState({});

    useEffect(() => {
        //CheckIfLocationEnabled();
        getCurrentPosition();
        getPinLocation(alfinete);
      }, []);
      
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

    useEffect(() =>{
      
    },[])













    const getPinLocation = async (props)=>{
      
      const pinAddress = await Location.reverseGeocodeAsync({
        latitude: props.latitude,
        longitude: props.longitude
      });
      let getPinAddress = pinAddress[0]
      setPinLocation({
        cep: getPinAddress.postalCode,
        region: getPinAddress.region,
        subregion: getPinAddress.subregion,
        district: getPinAddress.district,
        street: getPinAddress.street,
        number: getPinAddress.streetNumber,
        latitude: props.latitude, 
        longitude: props.longitude
      });

    }

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
        let addressSetLocation = address[0]
        setCurrentLocation({
          cep: addressSetLocation.postalCode,
          region: addressSetLocation.region,
          subregion: addressSetLocation.subregion,
          district: addressSetLocation.district,
          street: addressSetLocation.street,
          number: addressSetLocation.streetNumber,
          latitude: coords.latitude, 
          longitude: coords.longitude
        });


         // console.log('local é', currentLocation)
        if (coords) {
            const { latitude, longitude } = coords;
            // console.log('response do mapa:',response)
            setOrigin({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta:  0.020,
            longitudeDelta: 0.020,
            });
            //setAlfinete({latitude: coords.latitude, longitude: coords.longitude})
            setCoord({latitude: coords.latitude, longitude: coords.longitude})
        }

    }
  return (
    <MapView style={{flex:1}} 
      initialRegion={origin}
      showsUserLocation={true}
      zoomEnabled={true}
      loadingEnabled={true}
      mapType="hybrid"
      onPress={(e) => {
          setAlfinete(e.nativeEvent.coordinate);
          setCoord(e.nativeEvent.coordinate);
    }}
    >
      <Marker 
        coordinate={alfinete}
      />
    </MapView>
  )
}

export default Maps;