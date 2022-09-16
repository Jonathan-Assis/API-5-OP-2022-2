import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        ...stylesVar.backgroundSecondary
    },
    body: {
        flex: 1,      
        alignItems: 'center',
        padding:10
    },
    bText:{
        fontSize:22,
        fontWeight: 'bold',
    },
    bInput:{
        ...stylesVar.strokeBoxPrimary
    }
})

export default styles;