import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000085'
    },
    modal:{
        width:'70%',
        height:'50%',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...stylesVar.boxSecondary
    },
    header:{
        alignItems: 'center',
        margin:10
    },
    hIcon:{
        padding:25,
        borderRadius:100,
        ...stylesVar.backgroundPrimary,
    },
    hTitle:{
        marginTop:10,
        textAlign: 'center',
        ...stylesVar.titleSecondary,
        fontSize:20,
        backgroundColor: '#f0f',

    },
    body:{
        backgroundColor: '#f0f',
        margin:15,
    },
    bDescription:{

    },
    footer:{
        margin:16,
        flexDirection: 'row',
    },
    fButtonPrimary:{
        flex:1,
        alignItems: 'center',
        marginHorizontal:10,
        ...stylesVar.boxPrimary
    },
    fButtonPrimaryLabel:{
        ...stylesVar.buttonLabelPrimary
    },
    fButtonSecondary:{
        flex:1,
        alignItems: 'center',
        marginHorizontal:10,
        ...stylesVar.strokeBoxPrimary
    },
    fButtonSecondaryLabel:{
        ...stylesVar.buttonLabelSecondary
    },
})
export default styles