import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
    isChecked: {
        backgroundColor:'#25CE11',
        height: 25,
        width: 25,
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
    },
    notChecked: {
        ...stylesVar.backgroundSecondary,
        height: 25,
        width: 25,
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'#888888'
    },
    label:{
        marginLeft: 10,
        ...stylesVar.titleSecondary
    }
})

export default styles;