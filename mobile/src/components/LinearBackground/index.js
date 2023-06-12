import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Container } from '../Container'

import styles from './styles'

const LinearBackground = ({ children }) => {
    return (
        <LinearGradient
            colors={[styles.corners.color, styles.inside.color, styles.inside.color, styles.corners.color]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.container}
            >
            <Container>
                { children }
            </Container>
        </LinearGradient>           
    );
}

export { LinearBackground }