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
        padding:16,
    },

    bImage:{
        alignItems: 'center',
    },

    bInput:{
        marginBottom:7
    },

    bTitle:{
        ...stylesVar.titleSecondary,
        marginBottom:3
    },

    bInputBox:{
        ...stylesVar.strokeBoxPrimary,
        padding: 5,
        paddingHorizontal:15,
    },

    bEndereço:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
    },

    bEndereçoBox:{
        flex:0.4,
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