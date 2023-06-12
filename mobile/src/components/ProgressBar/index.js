import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

const ProgressBar = ({ strength }) => {
  const switchColor = () => {
    switch (strength) {
        case 'Fraca':
            return { width: '25%', backgroundColor: '#FFDB33' };
        case 'Média':
            return { width: '50%', backgroundColor: '#8BE62E' };
        case 'Forte':
            return { width: '100%', backgroundColor: '#25CE11' };
        default:
            return { width: '0%', backgroundColor: 'transparent' };
    }
  };

  const progressBarColor = switchColor();

  return(
    <>
    { strength &&
        <>
            <View style={styles.progressBarContainer}>
                <View style={styles.progressBarBackground} />
                <View style={[styles.progressBar, progressBarColor]} />
            </View>
            <Text>Senha {strength}!</Text>
        </>
    }
    </>
  )
};

export { ProgressBar }