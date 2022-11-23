import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        ...stylesVar.backgroundSecondary,
        justifyContent: 'space-between',
    },
    header:{
        flex:0.35,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,

    },
    hLogotype:{
        width:175, height:175
    },

    hTitle:{
        ...stylesVar.titlePrimary,
        fontWeight:'500',
        color: '#E9E9E9',
    },

    body: {
       //justifyContent: 'flex-end',
        flex:0.65,
    },

    bForm:{
        padding:16,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        flex:1,
        
        ...stylesVar.backgroundPrimary
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
    bLabelPrevious:{
        textAlign:'center',
        ...stylesVar.buttonLabelPrimary
    },
    
    bLabelNext:{
        textAlign:'center',
        ...stylesVar.buttonLabelSecondary
    },
    
    bButtonPrevious:{
        ...stylesVar.strokeBoxSecondary,
        padding: 12,
        marginVertical:10,
        flex:1,
        marginRight:8
    },
    bButtonNext:{
        ...stylesVar.boxSecondary,
        padding: 12,
        marginVertical:10,
        flex:1,
        marginLeft:8
    },
    footer:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"  
    }
})

export default styles;