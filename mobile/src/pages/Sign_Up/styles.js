import { StyleSheet } from 'react-native'
import { StyledVariables, StyledColors, Colors } from '../../styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...StyledColors.background.Secondary,
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
        ...StyledVariables.text.Medium.Primary,
        marginBottom:3
    },

    bInputBox:{
        ...StyledVariables.box.Stroke.Primary,
        padding: 8,
        paddingHorizontal:15,
    },

    bInputPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        ...StyledVariables.box.Stroke.Primary
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
        ...StyledVariables.box.Colored.Primary,
        padding: 12,
        marginVertical:10
    },

    bLabel:{
        textAlign:'center',
        ...StyledVariables.text.Medium.Tertiary
    },
    footer:{
        width:'100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:5
    },
    fDescription:{
        color: Colors.black
    },
    fDescriptionLogin:{
        textDecorationLine:'underline',
        fontWeight:'bold',
        color: Colors.purplePrimary
    }
})

export default styles;