import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList, Animated, Image,TextInput, ScrollView, Dimensions } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { Loading, PopUpAlert } from '../../components'
import { useAuth } from '../../contexts/Auth';
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import ServerConnection from "../../services"
import styles from "./styles";
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {BottomSheetSlider} from '../../components/BottomSheet'
import Logo from '../../assets/Logotype/LogoOP.svg'

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PinStrokeWhite from "../../assets/Icons/PinStrokeWhite.svg";
import PinStrokeBlack from '../../assets/Icons/PinStrokeBlack.svg'
import PinWithPlus from '../../assets/Icons/PinWithPlus.svg'

const Chamados = () => {
  const navigation = useNavigation();
  const [loading,setLoading] = useState(false)
  const [origin, setOrigin] = useState();
  const [categoria,setCategoria] = useState()
  const [ocorrencias,setOcorrencias] = useState()
  const [filterMarkers, setFilterMarkers] = useState([]);
  const [filterMarkersSelected,setFilterMarkersSelected] = useState(false)
  const authData = JSON.parse(useAuth().authData)
  const [pinData, setPinData] = useState({});
  const [pinSelected, setPinSelected] = useState(false);
  const [mapPermissionView, setMapPermissionView] = useState(false);
  
  
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
    setVisible(false)
  }
  
  useEffect(() => {
    //setLoading(true);
    permission();
    getData()
    .finally(() => {
      //setLoading(false); 
    })
  }, []);

 const filterData = (tipo) => {
  
  setFilterMarkers(()=> {
    if (tipo === 'Meus'){
      return ocorrencias.filter(item=>item.cidadao === authData._id)
    } 
    if (tipo === 'Todos'){
      return ocorrencias
    }
    return ocorrencias.filter(item => item.categoria === tipo)
  })
  }

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
      //setVisible(true)
      setMapPermissionView(false)
    } else {
      try {
        //setLoading(true)
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
          setMapPermissionView(true)
        } 
        //setLoading(false)
      } catch(e) {
        setPopUpPermission({
          onClose: close,
          icon: faLocationDot,
          title: 'Localização Desativada!',
          description: 'Os serviços de localização estão desativados, é necessário ativar para utilizar o mapa.',
          buttonPrimaryTitle: 'Fechar'
        })
        setMapPermissionView(false)
        //setVisible(true)
      }
    }
  }

  async function getData(){
    await ServerConnection.categorias()
    .then(({data}) => {
      setCategoria(()=>{
        return [
          { tipo: 'Meus',
            color: '#3429A8'
          },
          { tipo: 'Todos',
            color: '#DD4B3E'
          },
          ...data
        ]
      })
    })
    .then( async () => {
      await ServerConnection.getAllOcorrencia()
      .then(({data}) => {
        setOcorrencias(data)
        setFilterMarkers(data)
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const [mapShown,setMapShown]=useState(origin)

  const sliderRef = useRef(null)

  const gestureHandler = useCallback(()=>{
    const isActive = sliderRef?.current?.isActive();
    if(isActive){
      sliderRef?.current?.scrollTo(-80)
    } else {
      sliderRef?.current?.scrollTo(-320)
    }
  },[])

  const [scrollToIndex,setScrollToIndex]=useState(0)
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
      {mapPermissionView? 
      (
        <GestureHandlerRootView style={{flex:1}}>
         <MapView
          showsCompass={false}
          showsMyLocationButton={false}
          toolbarEnabled={false}
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          initialRegion={origin}
          showsUserLocation={true}
          region={origin}
          zoomEnabled={true}
          loadingEnabled={true}
          mapType="hybrid"
        >

{/*         {(filterMarkers).map((item,index) => {
            return (
              <Marker
                key={item.key}
                //title={item.categoria}
                pinColor={item.color}
                //description={item.descricao}
                //<PinStrokeWhite style={{color: '#000', width:20, height:22}} />
                coordinate={{
                  latitude: item.local.latitude,
                  longitude: item.local.longitude,
                }}
                
                onPress={()=>{
                  setPinSelected(true)
                  setPinData(item)
                  console.log(item.categoria)        
                }} 
                >
                 <PinStrokeBlack style={{color: item.color, width:23, height:32}} /> 

            <Callout tooltip>
                  <View>
                    <View style={styles.markerCallout}>
                      <Text>{item.titulo}
                      </Text>
                      <Image 
                          style={styles.image}
                          source={require('../../assets/Logotype/LogoOP.png')} resizeMode='cover'
                      />
                    </View>
                    <View style={styles.arrowBorder} />
                    <View style={styles.arrow} />
                  </View>
                </Callout> 
              </Marker>
              );
            })
          } */}
      {
      filterMarkers.map((item, index) => {
          const x = categoria.find(a => {
            return a.tipo === item.categoria
          })?.color
          const cor = item.cidadao === authData._id ? '#3429A8' : x;

          return (
            <Marker
              key={index}
              title={item.categoria}
              description={item.titulo}
              coordinate={{
                latitude: item.local.latitude,
                longitude: item.local.longitude,
              }}
              onPress={()=>{
                setPinData(item)
              }}
              >
               <PinStrokeBlack style={{color: cor, width:23, height:32}} /> 
              </Marker>
              )
            })}

        </MapView>

          <ScrollView
          scrollEnabled={true}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection:'row',
            position:'absolute',

          }}
          >
        <View style={styles.header}>
{/*         <TouchableOpacity style={[
                  styles.hCategory,
                  //filterMarkers === item.tipo ? styles.hSelectedCategory : styles.hCategory,
                ]}
                onPress={()=>{
                  setFilterMarkers(item.tipo)
                  //filterData()
                  //setFilterMarkersSelected(true) 
                }}
                >
                <View style={styles.hMarkerTitle}>
                  <PinStrokeWhite style={{color: '#3429A8', width:20, height:22}} />
                  <Text style={[
                    styles.hSubCategoryTitle,
                    //filterMarkers === item.tipo ? styles.hSelectedCategoryTitle : null
                  ]}>
                    Meus
                    </Text>
                  </View>
            </TouchableOpacity>
            <TouchableOpacity style={[
                  styles.hCategory,
                  //filterMarkers === item.tipo ? styles.hSelectedCategory : styles.hCategory,
                ]}
                onPress={()=>{
                  setFilterMarkers(ocorrencias)
                  //setFilterMarkersSelected(true) 
                }}
                >
                <View style={styles.hMarkerTitle}>
                  <PinWithPlus style={{color: 'red', width:22, height:22}} />
                  <Text style={[
                    styles.hSubCategoryTitle,
                    //filterMarkers === item.tipo ? styles.hSelectedCategoryTitle : null
                  ]}>
                    Todos
                    </Text>
                  </View>
            </TouchableOpacity> */}
          {categoria &&
            categoria.map((item,index) => { 
              
              
              return(
                <TouchableOpacity 
                key={index}
                style={[
                  styles.hCategory,
                  filterMarkersSelected === item.tipo
                  ? styles.hSelectedCategory : styles.hCategory
                ]}
                onPress={()=>{
                  setFilterMarkersSelected(item.tipo) 
                  filterData(item.tipo)
                }}>
                <View style={styles.hMarkerTitle}>
                  {item.tipo === 'Meus' && filterMarkers === item.tipo ?
                  <PinStrokeWhite style={{color: item.color, width:20, height:22}} />
                  :
                  <PinStrokeBlack style={{color: item.color, width:20, height:22}} />
                  }
                  <Text style={[
                    styles.hSubCategoryTitle,
                    filterMarkersSelected === item.tipo
                    ? styles.hSelectedCategoryTitle : null
                  ]}>
                    {item.tipo}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) 
          })
        }
        </View>
        </ScrollView>
        {/* <BottomSheetSlider ref={sliderRef}
        slider={
          <TouchableOpacity 
            style={styles.lineHandler}
            onPress={gestureHandler}
          >
            <View style={styles.line}/>
          </TouchableOpacity>
        }
        >
        
          </BottomSheetSlider> */}
        </GestureHandlerRootView>
      ) : (
        <View>
          <Text>Permissão negada</Text>
        </View>
      )
      }
      
      </Loading>

    </>
  );
};

export default Chamados;