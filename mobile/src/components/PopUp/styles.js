import { StyleSheet } from 'react-native'
import { StyledColors, StyledVariables } from '../../styles'

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000085'
    },
    modal:{
        width:'73%',
        padding:15,
        alignItems: 'center',
        ...StyledVariables.box.Colored.Secondary
    },
    header:{
        alignItems: 'center',
    },
    hIcon:{
        padding:25,
        borderRadius:100,
        ...StyledColors.background.Primary,
    },
    hTitle:{
        marginTop:10,
        textAlign: 'center',
        ...StyledVariables.text.Large.Primary,        
    },
    body:{
        marginVertical:15,
    },
    bDescription:{
        ...StyledVariables.text.Medium.Primary,
        textAlign: 'center',
        opacity:0.6,
        flexWrap:'wrap',
    },
    footer:{
        flexDirection: 'row',
    },
    fButtonPrimary:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:5,
        ...StyledVariables.box.Colored.Primary
    },
    fButtonPrimaryLabel:{
        padding:10,
        ...StyledVariables.text.Regular.Secondary
    },
    fButtonSecondary:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:5,
        ...StyledVariables.box.Stroke.Primary
    },
    fButtonSecondaryLabel:{
        padding:10,
        ...StyledVariables.text.Medium.Purple
    },

    modalTermos: {
        flex:1,
        padding:15,
        marginHorizontal:20,
        marginVertical:25,
        alignItems: 'center',
        ...StyledVariables.box.Colored.Secondary
    },

    headerTermos:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    hTermosTitle: {
        ...StyledVariables.text.Large.Primary,
        paddingLeft:5,
        marginRight:5 
    },
    hTermosCreatedAt: {
        fontSize:12,
        fontWeight: 'bold',
    },

    bodyTermos: {
        marginVertical:10,
        borderColor:'#D4D4D4',
        borderWidth:1.5,
        borderRadius:10,
        padding:10
    },

    bTermosDescription: {
        fontSize:14,
    },

    bTermosCheckBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    fTermosButtonEnabled:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:5,
        ...StyledVariables.box.Colored.Primary,
        padding: 10
    },

    fTermosButtonDisabled:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:5,
        backgroundColor: '#C4C4C4',
        borderRadius: 16,
        padding: 10
    },

    fTermosButtonLabel:{
        ...StyledVariables.text.Medium.Tertiary,
        textAlign: 'center',
    }
})
export default styles