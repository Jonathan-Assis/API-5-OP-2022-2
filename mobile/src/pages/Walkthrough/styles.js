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
        color:'#3429A8'
    },

    body: {
        flex:0.65,
    },

    bContainer:{
        padding:16,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        flex:1,
        
        ...stylesVar.backgroundPrimary
    },

    bTitle:{
        ...stylesVar.titleSecondary,
        marginBottom:3
    },
    
    bDescription:{
        ...stylesVar.titleSecondary,
        fontSize:16,
        opacity:0.5,
        marginBottom:5    
    },
    
    bButtons:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"  
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
    
})

export default styles;