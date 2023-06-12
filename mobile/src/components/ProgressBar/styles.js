import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    progressBarContainer: {
        height: 10,
        borderRadius: 5,
        marginTop: 5,
    },
    progressBarBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'gray',
        borderRadius: 5,
    },
    progressBar: {
        height: '100%',
        borderRadius: 5,
    },
});
  
export { styles }