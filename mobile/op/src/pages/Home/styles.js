import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        ...stylesVar.backgroundSecondary,
        flex: 1
    },

    header:{
        margin:16,
        paddingBottom:5
    },

    hTitle:{
        ...stylesVar.titlePrimary,
        flexWrap:'wrap'
    },

    body: {
        flex: 1,
        alignItems: 'center',
    },

    bTitle:{
        ...stylesVar.titleSecondary
    },
    bIcon:{
        ...stylesVar.icon,
    },
    bButton:{
        ...stylesVar.boxPrimary,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding:10,
        margin:10,
        width:150,
        height:150,
    },
    bButtonTitle:{
        ...stylesVar.titleTertiary,
        textAlign: 'center',
    },

    bRow:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap:'wrap',
    },
    bColumn:{
        justifyContent: 'space-around',

    }
})

export default styles;