import React from 'react'
import { ScrollView, View } from 'react-native'

import { styles } from './styles'

const Container = ({ children, scrollable = false, backgroundColor }) => {
    return (
        <>
        { scrollable ? 
            <View style={styles.aux}>
                <ScrollView 
                    style={
                        backgroundColor ?
                        [styles.container, backgroundColor]
                        : styles.container
                    }
                    >
                    {children}
                </ScrollView>
            </View>
            :
            <View 
                style={
                    backgroundColor ?
                    [styles.container, backgroundColor]
                    : styles.container
                }
            >
                {children}
            </View>
        }
        </>
    )
    
}

export { Container }
