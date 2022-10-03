import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import styles from './styles';

//Icons
import { faTree, faPersonDigging, faLightbulb, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import PipeIcon from '../../assets/Icons/pipeline-32-regular'

const Home = () => {  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <ScrollView>
      <View style={styles.header}>
        <Text style={styles.hTitle}>Bem vindo(a) ao Ocorrências Públicas!</Text>  
      </View>
      <View style={styles.body}>
       
          <Text style={styles.bTitle}>Selecione a categoria da ocorrência a ser reportado.</Text>  
          <View style={styles.bRow}>
            
            <View style={styles.bColumn}>
              <TouchableOpacity style={styles.bButton} onPress={() => navigation.navigate({
                name: 'Rep_Ocorrencia',
                params:{
                  TipoOcorrencia:'Eletricidade'
                }
              })}>
              <FontAwesomeIcon icon={ faLightbulb } size={50} color={'white'}/>
                <Text style={styles.bButtonTitle}>Elétricidade</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bButton} onPress={() => navigation.navigate({
                name: 'Rep_Ocorrencia',
                params:{
                  TipoOcorrencia:'Natureza'
                }
              })}>
              <FontAwesomeIcon icon={ faTree } size={50} color={'white'} />
                <Text style={styles.bButtonTitle}>Natureza</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bColumn}>
              <TouchableOpacity style={styles.bButton} onPress={() => navigation.navigate({
                name: 'Rep_Ocorrencia',
                params:{
                  TipoOcorrencia:'Pavimentação'
                }
              })}>
                <FontAwesomeIcon icon={ faPersonDigging } size={50} color={'white'} />
                <Text style={styles.bButtonTitle}>Pavimentação</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bButton} onPress={() => navigation.navigate({
                name: 'Rep_Ocorrencia',
                params:{
                  TipoOcorrencia:'Esgoto'
                }
              })}>
                <PipeIcon size={50} />
                <Text style={styles.bButtonTitle}>Esgoto</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bColumn}>
              <TouchableOpacity style={styles.bButton} onPress={() => navigation.navigate({
                name: 'Rep_Ocorrencia',
                params:{
                  TipoOcorrencia:'Outros'
                }
              })}>
                <FontAwesomeIcon icon={ faCommentDots } size={50} color={'white'} />
                <Text style={styles.bButtonTitle}>Outros</Text>
              </TouchableOpacity>
            </View>
          </View>
        
      </View>
      </ScrollView>
    </View>
  );
}

export default Home