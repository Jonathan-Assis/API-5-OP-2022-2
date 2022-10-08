import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-end',
        backgroundColor: '#00000085'
    },
    modal:{
        padding:15,
        borderTopRightRadius:16,
        borderTopLeftRadius:16,
        ...stylesVar.backgroundSecondary,
    },
    
footer:{
    paddingVertical:5
    },
    fheader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:5
    },
    fTitle:{
        marginBottom:10,
        ...stylesVar.titleSecondary,    
    },
    fButton:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:5,
        paddingLeft:20,
        ...stylesVar.boxPrimary
    },
    fButtonLabel:{
        padding:15,
        alignItems: 'center',
        ...stylesVar.buttonLabelPrimary
    },
})
export default styles