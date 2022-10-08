import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding:10
    },
    bText:{
        fontSize:22,
        fontWeight: 'bold',
    }
})

export default styles;