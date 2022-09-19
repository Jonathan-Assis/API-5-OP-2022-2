import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        ...stylesVar.backgroundPrimary
    },

    header:{
        flex:0.4,
        alignItems: 'center',
        width:'60%',
        justifyContent: 'space-around',
        margin:10,
    },

    hButton:{
        paddingHorizontal:30,
        alignItems: 'center',
        justifyContent: 'center',
        ...stylesVar.boxSecondary
    },

    hText:{
        ...stylesVar.titleSecondary,
        padding:6,
        fontWeight:'bold'
    },

    body:{
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    footer:{
        flex:0.1,
        alignItems: 'center',
        bottom: 10,
        width:'60%',
        justifyContent: 'center',
    },

    fButton:{
        paddingHorizontal:50,
        alignItems: 'center',
        justifyContent: 'center',
        ...stylesVar.strokeBoxSecondary
    },

    fText:{
        ...stylesVar.titleTertiary,
        padding:5,
        fontWeight:'bold'
    },
})

export default styles;