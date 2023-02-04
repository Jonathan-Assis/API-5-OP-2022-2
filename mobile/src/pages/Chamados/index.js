import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList, Animated, Image, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Loading, PopUpAlert, BottomSheet } from '../../components'
import { useAuth } from '../../contexts/Auth';
import * as Location from "expo-location";
import ServerConnection from "../../services"
import styles from "./styles";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarDays, faCircleInfo, faLocationDot, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import PinStrokeWhite from "../../assets/Icons/PinStrokeWhite.svg";
import PinStrokeBlack from '../../assets/Icons/PinStrokeBlack.svg'
import moment from "moment";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const Chamados = (props) => {
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
  const [mapPermission, setMapPermission] = useState(false)
  
  
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
    setMapPermission(false)
    setLoading(false); 
    navigation.goBack()
  }
  
  useFocusEffect( useCallback(() => {
    setLoading(true);
    permission();
    getData()
    .finally(() => {
      setLoading(false); 
    })
  }, []));

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
      setVisible(true)
    } else {
      try {
        setLoading(true)
        setMapPermission(true)
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

  async function getData(){
    await ServerConnection.categorias()
    .then(({data}) => {
      setLoading(true)
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
        setLoading(false)
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

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

  const convertDateTime = (data) => {
    return moment(data).utc('-03:00').format('DD/MM/YYYY hh:mm');
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
        {mapPermission?(
        <>
       { pinSelected &&
       <BottomSheet
            pinSelected={pinSelected}
            setPinSelected={setPinSelected}
            data={pinData?.data}
            descricao={pinData?.descricao}
            imagem={pinData?.imagem}
            categoria={pinData?.categoria}
            subCategoria={pinData?.subCategoria}
            titulo={pinData?.titulo}
            bairro={pinData?.bairro}
          />}
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
              coordinate={{
                latitude: parseFloat(item?.local.latitude),
                longitude: parseFloat(item?.local.longitude),
              }}
              onPress={()=>{
                setPinData(item)
                setPinSelected(true)
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
              }}
              >
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
            style={styles.BottomScrollView}
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
                style={styles.bCard}
              >
                <Image source={{uri: `${item.imagem}`}} style={styles.bCardImage} resizeMode='cover'/>
                <View style={styles.bCardBody}>
                    <Text style={styles.bCardBodyTitle} numberOfLines={1}>{item.titulo}</Text>
                    <View style={{flexDirection:'row', paddingHorizontal:1}}>
                      <View style={{paddingRight:8}}>
                        <FontAwesomeIcon icon={faCircleInfo} size={17} color='#323232' />
                      </View>
                      {
                      item.categoria === 'Outros' ? (
                        <Text style={styles.bCardBodyInformation} numberOfLines={1}>{item.categoria}</Text>
                      ):(
                        <Text style={styles.bCardBodyInformation} numberOfLines={1}>{item.subCategoria}</Text>
                      )
                    }
                    </View>
                  <View style={{flexDirection:'row',justifyContent:'space-between', paddingVertical:5}}>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                      <FontAwesomeIcon icon={faMapLocationDot} size={20} color='#323232' />
                      <View style={{paddingHorizontal:5}}>
                        <Text style={styles.bCardBodyDescription}>{item.bairro}</Text>
                      </View>
                    </View>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                      <FontAwesomeIcon icon={faCalendarDays} size={20} color='#323232' />
                      <View style={{paddingHorizontal:5}}>
                        <Text style={styles.bCardBodyDescription}>{convertDateTime(item.data)}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.bCardFooter}>
                    <TouchableOpacity
                      style={styles.bCardFooterButton}
                      onPress={() =>{
                        setPinData(item)
                        setPinSelected(true)
                      }}
                    >
                      <Text style={styles.bCardFooterButtonLabel}>Ver Ocorrência</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              )}
             />
            }
          </>
            ):(
              <View style={styles.permissionDisable}>
                  <PinStrokeBlack style={styles.permissionDisableMarker} />
                <Text style={styles.permissionDisableTitle}>Não foi possível obter a localização atual</Text>
                <Text style={styles.permissionDisableDescription}>Os serviços de localização foram negados ou não estão ativados.</Text>
                <View style={styles.permissiondDisableCardContainer}>
                  <TouchableOpacity
                    style={styles.permissionDisableCard}
                    onPress={() =>{
                      permission()
                    }}
                    >
                    <Text style={styles.permissionDisableCardLabel}>Tentar Novamente</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
        }
      </Loading>

    </>
  );
};

export default Chamados;