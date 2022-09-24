import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';

import EnergyIcon from '../../assets/Icons/energy'
import ConstructionIcon from '../../assets/Icons/construction'
import TreeIcon from '../../assets/Icons/tree'
import PipeIcon from '../../assets/Icons/pipeline-32-regular'

const Rep_Tipo = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hTitle}>Bem vindo(a) ao Ocorrências Públicas!</Text>  
      </View>
      <View style={styles.body}>
        <Text style={styles.bTitle}>Selecione o tipo de ocorrência a ser reportado.</Text>  
        <View style={styles.bRow}>
          
          <View style={styles.bColumn}>
            <TouchableOpacity style={styles.bButton} onPress={() => navigation.navigate({
              name: 'Rep_Ocorrencia',
              params:{
                TipoOcorrencia:'Elétrico'
              }
            })}>
              <EnergyIcon size={50} />
              <Text style={styles.bButtonTitle}>Elétrico</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bButton} onPress={() => navigation.navigate({
              name: 'Rep_Ocorrencia',
              params:{
                TipoOcorrencia:'Natureza'
              }
            })}>
              <TreeIcon size={50} />
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
              <ConstructionIcon size={50} />
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

        </View>
      </View>

    </View>
  )
}

export default Rep_Tipo;