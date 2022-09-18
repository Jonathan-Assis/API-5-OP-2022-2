import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import stylesVar from '../styles/stylesVar';

export default function Loading({ loading, children }) {
    return (
        loading
            ? (
                <View style={styles.container}>
                    <ActivityIndicator
                        size='large'
                        color={stylesVar.backgroundPrimary.backgroundColor}
                    />
                </View>
            )
            : <>{ children }</>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
