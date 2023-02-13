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
        width:175, 
        height:175,
        color:'#ffffff'
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

    footer:{
        width:'100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:10
    },
    fDescription:{
        color: '#000000'
    },
    fDescriptionCadastro:{
        textDecorationLine:'underline',
        fontWeight:'bold',
        color: '#3429A8'
    }
})

export default styles;