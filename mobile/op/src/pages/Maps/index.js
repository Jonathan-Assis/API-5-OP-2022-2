import React, { useState, useEffect } from "react";
import { StatusBar, Alert, View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { latlng } from "../Registros/axios";
import { categorias } from "../Registros/categorias";
import styles from "./styles";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import GeoIcon from "../../assets/Icons/geo-alt";
import GeoIconFill from "../../assets/Icons/geo-alt-fill";

const Maps = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState({ latitude: 0, longitude: 0 });
  const [pinSelected, setPinSelected] = useState(false);
  const [origin, setOrigin] = useState();
  const [coordinate, setCoordinate] = useState({});
  const [markers, setMarkers] = useState(latlng);
  const [filterMarkers, setFilterMarkers] = useState("");
  const [isMapSelected, setIsMapSelected] = useState(false);

  const filterData = markers.filter((e) => e.category === filterMarkers);


  useEffect(() => {
    permission();
  }, []);

  const permission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão de localização negada!",
        "É necessário a permissão para o uso do Mapa.",
        [{ text: "Ok" }]
      );
      navigation.goBack();
      return;
    } else {
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
    }

    //let backPerm = await Location.requestBackgroundPermissionsAsync();
    //console.log(backPerm);
  };

  //console.log(filterMarkers)
  return (
    <>
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
          setIsMapSelected(true)
        }}
      >
        {pinSelected && (
          <Marker
            coordinate={pin}
            onPress={(e) => {
              setIsMapSelected(false)
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
                  setIsMapSelected(false)
                  setPinSelected(false)
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
                      done: isMapSelected,
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
                  navigation.goBack()
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
                      done: true,
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
    </>
  );
};

export default Maps;