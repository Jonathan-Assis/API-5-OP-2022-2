import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        ...stylesVar.backgroundPrimary,
        justifyContent: 'space-between',
    },
    header:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,

    },
    hLogotype:{
        width:150, height:150
    },

    hTitle:{
        ...stylesVar.titlePrimary,
        fontWeight:'500',
        color: '#E9E9E9',
    },

    body: {
        justifyContent: 'flex-end',
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
        fontSize:16,
        opacity:0.5,
        marginBottom:5    
    },

    bTitle:{
        ...stylesVar.titleSecondary,
        marginBottom:3
    },

    bInputBox:{
        ...stylesVar.strokeBoxPrimary,
        padding: 8,
        paddingHorizontal:15,
    },
    bInputPassword:{
        flexDirection: 'row',
        alignItems: 'center',
        ...stylesVar.strokeBoxPrimary,
    },
    bInputPasswordBox:{
        flex:1,
        padding: 8,
        paddingHorizontal:15,
    },
    bPasswordIcon:{
        marginHorizontal:8
    },
    bLabel:{
        textAlign:'center',
        ...stylesVar.titleTertiary
    },
    
    bButton:{
        ...stylesVar.boxPrimary,
        padding: 12,
        marginVertical:10
    },
})

export default styles;