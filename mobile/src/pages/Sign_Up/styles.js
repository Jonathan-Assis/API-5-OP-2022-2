import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...stylesVar.backgroundSecondary,
    },
    
    body: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },

    bInput:{
        marginBottom:7
    },

    bLabelTitle:{
        ...stylesVar.titleSecondary,
        marginBottom:3
    },

    bInputBox:{
        ...stylesVar.strokeBoxPrimary,
        padding: 8,
        paddingHorizontal:15,
    },

    bInputPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        ...stylesVar.strokeBoxPrimary
    },

    bInputPasswordBox: {
        flex: 1,
        padding: 8,
        paddingHorizontal: 15
    },

    bPasswordIcon: {
        marginHorizontal: 8
    },

    bButton:{
        ...stylesVar.boxPrimary,
        padding: 12,
        marginVertical:10
    },

    bLabel:{
        textAlign:'center',
        ...stylesVar.titleTertiary
    },
    footer:{
        width:'100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:5
    },
    fDescription:{
        color: '#000000'
    },
    fDescriptionLogin:{
        textDecorationLine:'underline',
        fontWeight:'bold',
        color: '#3429A8'
    }
})

export default styles;