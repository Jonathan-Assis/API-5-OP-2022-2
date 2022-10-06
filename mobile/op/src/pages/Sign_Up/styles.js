import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...stylesVar.backgroundSecondary,
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
        ...stylesVar.titleSecondary,
        marginBottom:3
    },

    bInputBox:{
        ...stylesVar.strokeBoxPrimary,
        padding: 8,
        paddingHorizontal:15,
    },

    bButton:{
        ...stylesVar.boxPrimary,
        padding: 12,
        marginVertical:10
    },

    bLabel:{
        textAlign:'center',
        ...stylesVar.titleTertiary
    },
})

export default styles;