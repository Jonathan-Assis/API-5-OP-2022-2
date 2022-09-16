import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        ...stylesVar.backgroundPrimary
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding:10
    },
    bLogotype:{
        width:200,
        height:200
    },
    bText:{
        fontSize:22,
        fontWeight: 'bold',
        ...stylesVar.titleTertiary
    }
})

export default styles;