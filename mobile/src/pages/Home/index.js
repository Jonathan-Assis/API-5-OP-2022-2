import styles from './styles'
import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { CardHome } from './CardState'
import {useNavigation} from '@react-navigation/native'

const Home = () => { 
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hTitle}>Bem-vindo(a) ao Ocorrências Públicas!</Text>  
          <Text style={styles.bTitle}>Selecione a categoria da ocorrência a ser reportada.</Text>  
      </View> 

      <FlatList
        data={CardHome}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity key={`${item.title + index}`} style={styles.bButton} onPress={() => navigation.navigate({
            name: 'Rep_Ocorrencia',
            params: {
              TipoOcorrencia: item.routeParams
            }
            })}>
            <View style={{flex:1, flexDirection: 'row', justifyContent:'space-around', alignItems:'center'}}>
              <View style={{flex: 1, justifyContent:'space-between'}}>
                <View>
                  <Text style={[styles.bButtonTitle, {fontSize:26, paddingBottom:50}]}>{item.title}</Text>
                </View>
                <View style={{flex:1, justifyContent:'flex-start', alignItems:'flex-start'}}>
                  {item.relations ? 
                  <>
                    <Text style={styles.bButtonTitle}>Problemas relacionados:</Text>
                    <Text style={styles.bButtonTitle}>{item.relations}</Text>
                  </>
                  :
                  <Text style={styles.bButtonTitle}>Problemas que não estão relacionados com as outras categorias.</Text>
                  }
                  </View>
              </View>
              {item.icon}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home