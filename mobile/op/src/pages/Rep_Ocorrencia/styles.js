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
        margin:20,    
        padding:30,
        ...stylesVar.boxPrimary
    },

    bImage:{
        alignItems: 'center',
    },

    bInput:{
        marginBottom:7,
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
        padding: 5,
        paddingHorizontal:15,
    },
    bInputBox:{
        flex:1,
        textAlign: 'center',
        ...stylesVar.boxSecondary,
        ...stylesVar.placeholderSecondary,
        padding: '30%',
    },

    bArquivo:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    bLabel:{
        textAlign:'center',
        ...stylesVar.titleSecondary
    },
    
    bButton:{
        ...stylesVar.boxSecondary,
        padding: 10,
        marginVertical:10
    },
})

export default styles;