import React, { useState, useEffect, useRef, useCallback, createRef } from "react";
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
import Ll from '../../assets/Logotype/logo.png'
import moment from 'moment'

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faLocationDot, faMagnifyingGlassLocation, faMapLocationDot, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import PinStrokeWhite from "../../assets/Icons/PinStrokeWhite.svg";
import PinStrokeBlack from '../../assets/Icons/PinStrokeBlack.svg'
import PinWithPlus from '../../assets/Icons/PinWithPlus.svg'
import { set } from "react-native-reanimated";

const Chamados = () => {
  const navigation = useNavigation();
  const [loading,setLoading] = useState(false)
  const [origin, setOrigin] = useState();
  const [categoria,setCategoria] = useState([])
  const [ocorrencias,setOcorrencias] = useState([])
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
      return ocorrencias.filter(item=>item?.cidadao === authData._id)
    } 
    if (tipo === 'Todos'){
      return ocorrencias
    }
    return ocorrencias.filter(item => item?.categoria === tipo)
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

  const convertDateTime = (data) => {
    return moment(data).utcOffset('-03:00').format('DD/MM/YYYY HH:mm');
  }

  const [mapShown,setMapShown]=useState(origin)
  const sliderRef = useRef(null)

  const gestureHandler = useCallback(()=>{
    const isActive = sliderRef?.current?.isActive();
    if(isActive){
      sliderRef?.current?.scrollTo(0)
      setTimeout(() => {
        setPinSelected(false)
      },400)
    }
  },[])
  
  const [scrollToIndex,setScrollToIndex]=useState(0)
  

  
  var mapAnimation = new Animated.Value(0);

  const {width, height} = Dimensions.get('window')
  const CARD_WIDTH = width * 0.8;

  const interpolations = filterMarkers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index + 1) * CARD_WIDTH),
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.3, 1],
      extrapolate: "clamp"
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.index;

    let position = (markerID * CARD_WIDTH) + (markerID * 20); 
    _scrollView.current.scrollTo({x: position});
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
      {mapPermissionView? 
      (
        <GestureHandlerRootView style={{flex:1}}>
         <MapView
          initialRegion={origin}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={false}
          showsCompass={false}
          toolbarEnabled={false}
          style={{ flex: 1 }}
          region={origin}
          zoomEnabled={true}
          loadingEnabled={true}
          mapType="hybrid"
        >
      {
      filterMarkers.map((item, index) => {
          const x = categoria.find(a => {
            return a.tipo === item.categoria
          })?.color
          const cor = item.cidadao === authData._id ? '#3429A8' : x;
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };

            return (
              <Marker
              key={index}
              title={item?.subCategoria}
              coordinate={{
                latitude: parseFloat(item?.local.latitude),
                longitude: parseFloat(item?.local.longitude),
              }}
              onPress={(e)=>{
                setPinData(item)
                onMarkerPress(e)
              }}
              >
                <View style={{alignItems: 'center', justifyContent:'center',width:50, height:50}}>
                <Animated.View style={[scaleStyle]}>
                    <PinStrokeBlack style={[{color: cor, width:23, height:32}, ]} />
                </Animated.View>
                </View>
              </Marker>
              )
            }
          )
          }

        </MapView>

        {categoria &&
        <FlatList
          data={categoria}
          scrollEnabled={true}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection:'row',
            position:'absolute',

          }}
          renderItem={({ item, index }) => (
            <View style={styles.header}>
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
          </View>
        )}
          />
        }

        { filterMarkers &&
          <Animated.FlatList
            data={filterMarkers}
            horizontal
            pagingEnabled
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + 20}
            snapToAlignment="center"
            style={styles.scrollView}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: mapAnimation,
                    },
                  },
                },
              ],
              { useNativeDriver: true }
            )}
            renderItem={({ item, index })=>(
              <View 
                key={index} 
                style={styles.card}
              >
                {/* <Image 
                  style={styles.cardImage} 
                  resizeMode='cover' 
                  source={{uri: `${ocorrencias?.imagem}`}} 
                /> */}
                <Image source={require('../../assets/Logotype/logo.png')} style={{width: '100%', height:100}} resizeMode='cover'/>
                <View style={styles.textContent}>
                  <Text style={styles.cardtitle} numberOfLines={1}>{item.titulo}</Text>
                  <Text style={styles.cardDescription} numberOfLines={1}>{item.descricao}</Text>
                  <View style={styles.button}>
                    <TouchableOpacity
                      style={[
                        styles.signIn,{
                          borderColor: '#ff6347',
                          borderWidth: 1
                        }
                      ]}
                      onPress={() =>{
                        //getPinZoom(item.local)
                      }}
                    >
                      <Text style={[styles.textSign,{
                        color: '#ff6347',
                      }]}>Ver Local</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.signIn,{
                          borderColor: '#ff6347',
                          borderWidth: 1
                        }
                      ]}
                      onPress={() =>{
                        setPinData(item)
                        setPinSelected(true)
                      }}
                    >
                      <Text style={[styles.textSign,{
                        color: '#ff6347',
                      }]}>Ver Detalhes</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              )}
             />
            }

    { pinSelected && (
      <BottomSheetSlider
        ref={sliderRef}
        slider={
          <TouchableOpacity 
            style={styles.lineHandler}
            onPress={gestureHandler}
          >
            <View style={styles.line}/>
          </TouchableOpacity>
        }
        >
          <View style={styles.modal}>
            <View style={{backgroundColor:'#ff7', height:200, }}>
              <Image source={require('../../assets/Logotype/logo.png')} style={{width: '100%', height:'100%'}} resizeMode='cover'/>
              <View style={{flex:1,justifyContent:'flex-end'}}>
                <View style={styles.bsBairro}>
                  <FontAwesomeIcon icon={faMapLocationDot} size={25} color='#fff' />
                  <View>
                    <Text style={styles.bsBairroTitle}>
                      {pinData?.bairro}
                    </Text>
                    <Text style={styles.bsData}>
                      {convertDateTime(pinData?.data)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>


            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.bsInfo}>
                <Text style={{fontSize:26, fontWeight:'bold'}}>
                  {pinData?.titulo}
                </Text>
                <View style={styles.bsTipo}>
                  <FontAwesomeIcon icon={faCircleInfo} size={17} color='#323232' />
                  <Text style={styles.bsTipoTitle}>{pinData?.subCategoria}</Text>
                </View>

              <View style={styles.bsDescricao}>
                <Text style={styles.bsDescricaoText}>
                  {pinData?.descricao}
                </Text>
              </View>

              <View style={styles.bsApoio}>
                <Logo style={{width:40, height:40}} resizeMode='contain'/>
                <Text style={styles.bsApoioNumero}>
                  +60 Pessoas apoiaram isto
                </Text>
              </View>


              <TouchableOpacity style={styles.bsApoiar}>
                <Logo style={{width:40, height:40}} resizeMode='contain'/>
                <Text style={styles.bsApoiarLabel}>Apoiar causa</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        
          </BottomSheetSlider>
        )
        }
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