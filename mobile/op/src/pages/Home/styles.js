import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        ...stylesVar.backgroundSecondary,
        flex: 1
    },

    header:{
        flex:0.3,
        margin:16,
    },

    hTitle:{
        ...stylesVar.titlePrimary,
        flexWrap:'wrap'
    },

    body: {
        flex: 1,
        alignItems: 'center',
        padding:10
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
        width:130,
        height:130,
    },
    bButtonTitle:{
        ...stylesVar.titleTertiary,
        textAlign: 'center',
    },

    bRow:{
        flexDirection: 'row',
    },
    bColumn:{
        justifyContent: 'space-around',
        margin:20
    }

})

export default styles;