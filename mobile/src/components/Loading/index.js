import React from 'react'
import { Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import LogoOP from '../../assets/Logotype/LogoOP.svg'
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated'

import styles from './styles'

export default function Loading({ loading, children, title }) {
    return (
        loading
            ? (
                <LinearGradient
                colors={['#4444EE', '#4944EE', '#4944EE', '#4444EE']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.container}
              >
                <Animated.View
                    entering={BounceIn}
                >
                    <LogoOP style={styles.logo} />
                </Animated.View>
                <Text style={styles.title}>
                    {
                        title ? title : 'Carregando...'
                    }
                </Text>
               </LinearGradient>
                )
            : <>{ children }</>
           
    );
}