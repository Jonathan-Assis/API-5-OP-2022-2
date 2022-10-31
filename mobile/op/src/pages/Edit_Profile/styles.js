import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        ...stylesVar.backgroundSecondary
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
        borderColor:'#3429A8'
    },
    
    bBottomImageButton:{
        position:'absolute',
        alignItems: 'flex-end', 
        bottom: 0, 
        right: -10,
        padding: 5,
        borderWidth: 2,
        borderColor:'#3429A8',
        borderRadius:100,
        ...stylesVar.backgroundSecondary
    },

    bImageStyle: {
        width: 140,
        height: 140,
        borderRadius: 100,
        overflow: "hidden",
        borderWidth: 2,
        borderColor:'#3429A8'
    },

    bImageLabel:{
        textAlign: 'center',
        fontSize:20,
        fontWeight:'bold',
        color: '#3429A8',
    },
    
    bTitle:{
        ...stylesVar.titleSecondary,
        marginBottom:3
    },
    
    bInput:{
        marginBottom:7,
        width: '100%'
    },

    bInputBox:{
        ...stylesVar.strokeBoxPrimary,
        padding: 8,
        paddingHorizontal:15,
    },

    bInputPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        ...stylesVar.strokeBoxPrimary
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
        ...stylesVar.titleTertiary
    },
    
    bButton:{
        ...stylesVar.boxPrimary,
        padding: 12,
        marginVertical:10,
        width: '100%'
    },
})

export default styles;