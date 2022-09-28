import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        flex:1,
        height:190,
        alignItems: 'center',
        margin:10
    },

    hImage:{
        flex:1,
        margin:15,
        alignItems: 'center'
    },
    hTitle:{
        textAlign: 'center',
        ...stylesVar.titleSecondary,
        marginBottom:3
    },
 
    body: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding:10
    },
    bText:{
        fontSize:22,
        fontWeight: 'bold',
    }

})

export default styles;