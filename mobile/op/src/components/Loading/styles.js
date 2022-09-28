import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        ...stylesVar.backgroundSecondary
    },
    body:{
        flex:0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bBall:{
        width:15,
        height:15,
        margin:10,
        ...stylesVar.boxPrimary,
    },
})

export default styles;