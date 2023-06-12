import { StyleSheet } from 'react-native'
import { StyledVariables, StyledColors, Colors } from '../../styles'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        ...StyledColors.background.Primary,
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
        color:Colors.white
    },

    hTitle:{
        ...StyledVariables.text.Large.Primary,
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
        ...StyledColors.background.Secondary
    },

    bInput:{
        marginBottom:7
    },
    bDescription:{
        ...StyledVariables.text.Medium.Primary,
        fontSize:16,
        opacity:0.5,
        marginBottom:5    
    },

    bTitle:{
        ...StyledVariables.text.Medium.Primary,
        marginBottom:3
    },

    bInputBox:{
        ...StyledVariables.box.Stroke.Primary,
        padding: 8,
        paddingHorizontal:15,
    },
    bInputPassword:{
        flexDirection: 'row',
        alignItems: 'center',
        ...StyledVariables.box.Stroke.Primary,
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
        ...StyledVariables.text.Medium.Tertiary
    },
    
    bButton:{
        ...StyledVariables.box.Colored.Primary,
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
        color: Colors.black
    },
    fDescriptionCadastro:{
        textDecorationLine:'underline',
        fontWeight:'bold',
        color: Colors.purplePrimary
    }
})

export default styles;