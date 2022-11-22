import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //alignItems: 'center',
        ...stylesVar.backgroundSecondary
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
        ...stylesVar.backgroundSecondary
    },

    hTitle:{
        textAlign: 'center',
        fontSize:20,
        fontWeight:'bold',
        color: '#3429A8',
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
        paddingTop:10,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        ...stylesVar.backgroundPrimary,
    },

    bInput:{
        marginBottom:15,
    },

    bTitle:{
        textAlign: 'center',
        ...stylesVar.titleTertiary,
        marginBottom:3
    },

    bTitle2:{
        textAlign: 'center',
        ...stylesVar.titleTertiary,
        marginBottom: 20
    },

    bInputStrokeBox:{
        textAlign: 'center',
        ...stylesVar.strokeBoxSecondary,
        ...stylesVar.placeholderPrimary,
        padding: 10,
        paddingHorizontal:15,
    },

    bInputBox:{
        textAlign: 'center',
        ...stylesVar.boxSecondary,
        ...stylesVar.placeholderSecondary,
        padding: 10,
        minHeight: 100,
    },

    bPickerBox:{
        ...stylesVar.strokeBoxSecondary,
        marginBottom:10,
    },

    bPickerTitle:{
        flexWrap: 'nowrap',        
        ...stylesVar.titleTertiary,
    },

    bArquivo:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10,
    },

    bLabel:{
        textAlign:'center',
        ...stylesVar.titleSecondary
    },
    
    bButton:{
        ...stylesVar.boxSecondary,
        padding: 14,
        marginVertical:10
    },

    bButtonMap:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...stylesVar.strokeBoxSecondary,
        padding: 10,
        paddingHorizontal:25,
        marginBottom:15,
    },
    
    bButtonMapLabel:{
        textAlign: 'center',
        marginHorizontal:20,
        ...stylesVar.titleTertiary,
    },

    bButtonMapSelected:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...stylesVar.boxSecondary,
        padding: 11,
        paddingHorizontal:25,
        marginBottom:15,
    },

    bButtonMapLabelSelected:{
        textAlign: 'center',
        marginHorizontal:20,
        ...stylesVar.titleSecondary,
    }

})

export default styles;