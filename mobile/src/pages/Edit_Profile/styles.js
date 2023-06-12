import { StyleSheet } from 'react-native'
import { StyledVariables, StyledColors } from '../../styles'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        ...StyledColors.background.Secondary
    },

    body: {
        flex: 1,
        alignItems: 'center',
        padding:16,
    },

    bImageIcon:{
        width: 140
    },

    hImage:{
        width:140,
        height:140,
        borderRadius: 100, 
        overflow: "hidden", 
        borderWidth: 2,
        borderColor:'#4444EE'
    },
    
    bBottomImageButton:{
        position:'absolute',
        alignItems: 'flex-end', 
        bottom: 0, 
        right: -10,
        padding: 5,
        borderWidth: 2,
        borderColor:'#4444EE',
        borderRadius:100,
        ...StyledColors.background.Secondary
    },

    bImageStyle: {
        width: 140,
        height: 140,
        borderRadius: 100,
        overflow: "hidden",
        borderWidth: 2,
        borderColor:'#4444EE'
    },

    bImageLabel:{
        textAlign: 'center',
        fontSize:20,
        fontWeight:'bold',
        color: '#4444EE',
    },
    
    bTitle:{
        ...StyledVariables.text.Medium.Primary,
        marginBottom:3
    },
    
    bInput:{
        marginBottom:7,
        width: '100%'
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

    bEndereço:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
    },

    bLabel:{
        textAlign:'center',
        ...StyledVariables.text.Medium.Tertiary,
        paddingHorizontal:10
    },
    
    bButton:{
        ...StyledVariables.box.Colored.Primary,
        padding: 12,
        marginVertical:10,
        flex:1,
        width: '100%',
        justifyContent: 'center',
        flexDirection:'row',
    },

    bNotification: {
        marginBottom:5,
        width: '100%',
        paddingHorizontal: 5,
        marginBottom: 15
    },

    bTermsAttached: {
        flexDirection: 'row',
        alignContent: 'center',
    },

    bAttachedLabel: {
        marginStart: 5
    },

    bSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    bSwitchbg:{
        false: '#BBBBBB',
        true: '#5459A8'
    },

    bNotificationLabel: {
        ...StyledVariables.text.Medium.Primary,
        flexWrap: 'nowrap',
    },

    lineStyle:{
        width: '100%',
        borderRadius:10,
        borderWidth: 0.5,
        borderColor:'#4444EE',
        margin:10,
   }
})

export default styles;