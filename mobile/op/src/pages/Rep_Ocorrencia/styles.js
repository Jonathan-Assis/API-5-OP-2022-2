import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //alignItems: 'center',
        ...stylesVar.backgroundSecondary
    },
    header:{
        flex:1,
        height:190,
        alignItems: 'center',
        margin:10
    },

    hImage:{
        flex:1,
        margin:15,
        alignItems: 'center'
    },
    hTitle:{
        textAlign: 'center',
        ...stylesVar.titleSecondary,
        marginBottom:3
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
        justifyContent: 'space-around',
        ...stylesVar.strokeBoxSecondary,
        padding: 10,
        paddingHorizontal:25,
        marginBottom:15,
    },
    bButtonMapLabel:{
        textAlign: 'center',
        ...stylesVar.titleTertiary,
        left:-20
    },
    bButtonMapSelected:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        ...stylesVar.boxSecondary,
        padding: 11,
        paddingHorizontal:25,
        marginBottom:15,
    },
    bButtonMapLabelSelected:{
        textAlign: 'center',
        ...stylesVar.titleSecondary,
        left:-20
    }

})

export default styles;