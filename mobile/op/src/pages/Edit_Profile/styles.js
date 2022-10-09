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
    hIconPlus:{
        position:'absolute',
        bottom:22,
        right:85,
        borderRadius:100,
        ...stylesVar.backgroundSecondary
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
        marginBottom:7
    },

    bInputBox:{
        ...stylesVar.strokeBoxPrimary,
        padding: 8,
        paddingHorizontal:15,
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
        marginVertical:10
    },
})

export default styles;