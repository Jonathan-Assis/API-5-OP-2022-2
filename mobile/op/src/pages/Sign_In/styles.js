import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        ...stylesVar.backgroundPrimary,
        justifyContent: 'flex-end',
    },
    header:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20
    },

    hTitle:{
        ...stylesVar.titlePrimary,
        color: '#E9E9E9',
    },

    body: {
        flexDirection: 'row',
    },

    bForm:{
        padding:16,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        ...stylesVar.backgroundSecondary
    },

    bInput:{
        marginBottom:7
    },
    bDescription:{
        ...stylesVar.titleSecondary,
        opacity:0.5,
        marginBottom:5    
    },

    bTitle:{
        ...stylesVar.titleSecondary,
        marginBottom:3
    },

    bInputBox:{
        ...stylesVar.strokeBoxPrimary,
        padding: 5,
        paddingHorizontal:15,
    },

    bLabel:{
        textAlign:'center',
        ...stylesVar.titleTertiary
    },
    
    bButton:{
        ...stylesVar.boxPrimary,
        padding: 10,
        marginVertical:10
    },
})

export default styles;