import React, {useRef} from 'react';
import { View,Text,TouchableOpacity, StatusBar, FlatList, Animated, Dimensions, StyleSheet, Modal } from 'react-native';
import styles from './styles';
import { backgrounds, data } from './Data'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const {width, height} = Dimensions.get('window')

const Indicator = ({scrollX})=>{

  return (
    <View style={styles.indicatorContainer}>
      {data.map((item,index)=>{
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
          const scale = scrollX.interpolate({
            inputRange,
            outputRange:[0.8, 1.4, 0.8],
            extrapolate: 'clamp'
          })
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange:[0.5, 0.9, 0.5],
            extrapolate: 'clamp'
          })
        return(
          <Animated.View
            key={index}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#fff',
              elevation:3,
              opacity,
              margin: 8,
              transform: [
                {
                  scale
                }
              ]
            }}
          />
        )
      })}
    </View>
  )
}

const Backdrop = ({scrollX})=>{
  const backgroundColor = scrollX.interpolate({
    inputRange: backgrounds.map((_, i) => i * width),
    outputRange: backgrounds.map((bg) => bg),
  })
  return (
    <Animated.View 
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor
        }
      ]}
    />
  )
}



const Walkthrough =({walkOn,setWalkOn,children}) => {

  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    walkOn? (
      <Modal
        animationType="fade"
        walkOn={walkOn}      
        onRequestClose={()=>setWalkOn(false)}
        hardwareAccelerated={true}
        transparent
      >
        <StatusBar hidden />
        <View style={styles.container}>
          <Backdrop scrollX={scrollX} />
          <Indicator scrollX={scrollX} />
          <TouchableOpacity style={styles.exitButton}
            onPress={()=>{
              setWalkOn(false);
            }}
          >
            <FontAwesomeIcon icon={ faXmark } size={40} color={'white'}  />
          </TouchableOpacity>
          <Animated.FlatList
            data={data}
            keyExtractor={item => item.key}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={32}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollX
                    }
                  }
                }
              ],
              { useNativeDriver: false }
              )}
              renderItem={({ item }) => {
                return (
                <View style={styles.walkthroughContainer}>
                  <View style={styles.wtHeader}>
                    {item.image}
                    <Text style={styles.wtHeaderTitle}>{item.tela}</Text>
                  </View>
                  <View style={styles.wtBody}>
                    <Text style={styles.wtBodyTitle}>{item.titulo}</Text>
                    <Text style={styles.wtBodyDescription}>{item.descricao}</Text>
                  </View>
              </View>
              )
            }}
          />
        </View>
      </Modal>
    ) : <>{ children }</>
  );
}


export {Walkthrough};