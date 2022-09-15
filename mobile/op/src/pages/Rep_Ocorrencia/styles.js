import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:"center", 
        ...stylesVar.backgroundSecondary
    },
    body: {
        flex: 1,
        margin:30,
        alignItems: 'center',
        justifyContent:"center", 
        paddingHorizontal:'25%',
         ...stylesVar.boxPrimary

    },
    bText:{
        ...stylesVar.titleTertiary
    },

    bRow:{
        flexDirection:'row'
    },
    bInputStroke:{
        ...stylesVar.strokeBoxSecondary,
        paddingHorizontal:20
    },
    bInputStrokePlaceholder:{
        ...stylesVar.placeholderPrimary,
        textAlign:'center'
    },
    bInputBox:{
        flex:0.4,
        ...stylesVar.boxSecondary,
        justifyContent:'center'
    },
    bInputBoxPlaceHolder:{
        ...stylesVar.placeholderSecondary,
        textAlign:'center'
    },
    bButton:{
       ...stylesVar.boxSecondary
    },
    bButtonLabel:{
        ...stylesVar.buttonLabel
    }
})

export default styles;