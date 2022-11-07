import { StyleSheet, Dimensions } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const {height:SCREEN_HEIGHT}=Dimensions.get('window')

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
        padding:16,
        alignItems: 'center',
        ...stylesVar.buttonLabelPrimary
    },

    bottomSheetContainer:{
        ...stylesVar.backgroundSecondary,
        height:SCREEN_HEIGHT,
        width:'100%',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25
    },
})
export default styles