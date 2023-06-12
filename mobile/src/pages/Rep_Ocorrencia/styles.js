import { StyleSheet } from 'react-native'
import { StyledVariables, StyledColors } from '../../styles'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        ...StyledColors.background.Secondary
    },

    PopUpLogotype:{
        width:60, height:60
    },

    hRemove:{
        marginVertical:10,
    },
    hRemoveButton:{
        position:'absolute',
        alignItems: 'flex-end', 
        top:10, 
        right:10
    },

    header:{
        flex:1,
        alignItems: 'center',
        margin:10,
    },

    hImageIcon:{
        flex:1,
        margin:15,
        alignItems: 'center'
    },
    hImage:{
        width:180,
        height:180
    },

    hIconPlus:{
        right: -15,
        position:'absolute',
        bottom:20,
        borderRadius:100,
        ...StyledColors.background.Secondary
    },

    hTitle:{
        textAlign: 'center',
        fontSize:20,
        fontWeight:'bold',
        color: '#4444EE',
        bottom:0
    },
 
    body: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    
    bContainer: {
        flex: 1,
        width:'100%',
        padding:25,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        ...StyledColors.background.Primary,
    },

    bInput:{
        marginBottom:15,
    },

    bTitle:{
        textAlign: 'center',
        ...StyledVariables.text.Medium.Tertiary,
        marginBottom:3
    },

    bTitle2:{
        textAlign: 'center',
        ...StyledVariables.text.Medium.Tertiary,
        marginBottom: 20
    },

    bInputStrokeBox:{
        textAlign: 'center',
        ...StyledVariables.box.Stroke.Secondary,
        ...StyledVariables.text.Regular.Secondary,
        padding: 10,
        paddingHorizontal:15,
    },

    bInputBox:{
        textAlign: 'center',
        ...StyledVariables.box.Colored.Secondary,
        ...StyledVariables.text.Regular.Primary,
        padding: 10,
        minHeight: 100,
    },

    bPickerBox:{
        ...StyledVariables.box.Stroke.Secondary,
        marginBottom:10,
    },

    bPickerTitle:{
        flexWrap: 'nowrap',        
        ...StyledVariables.text.Medium.Tertiary,
    },

    bArquivo:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10,
    },

    bLabel:{
        textAlign:'center',
        ...StyledVariables.text.Medium.Primary
    },
    
    bButton:{
        ...StyledVariables.box.Colored.Secondary,
        padding: 14,
        marginVertical:10
    },

    bButtonMap:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...StyledVariables.box.Stroke.Secondary,
        padding: 10,
        paddingHorizontal:25,
        marginBottom:15,
    },
    
    bButtonMapLabel:{
        textAlign: 'center',
        marginHorizontal:20,
        ...StyledVariables.text.Medium.Tertiary,
    },

    bButtonMapSelected:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...StyledVariables.box.Colored.Secondary,
        padding: 11,
        paddingHorizontal:25,
        marginBottom:15,
    },

    bButtonMapLabelSelected:{
        textAlign: 'center',
        marginHorizontal:20,
        ...StyledVariables.text.Medium.Primary,
    }

})

export default styles;