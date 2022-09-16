import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        ...stylesVar.backgroundSecondary
    },
    body: {
        flex: 1,      
        margin:16,
    },
    bText:{
        ...stylesVar.titleSecondary
    },
    bCEP:{
        flexDirection:'row'
    },
    bInputBox:{
        ...stylesVar.strokeBoxPrimary,
        padding: 5,
        paddingHorizontal:15,
        margin:5
    },
    bLabel:{
        textAlign:'center',
        ...stylesVar.titleTertiary
    },
    bButton:{
        ...stylesVar.boxPrimary,
        padding: 10,
        marginVertical:10   

    },
})

export default styles;