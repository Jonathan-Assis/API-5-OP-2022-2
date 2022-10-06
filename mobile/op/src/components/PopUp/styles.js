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
        width:'73%',
        padding:15,
        alignItems: 'center',
        ...stylesVar.boxSecondary
    },
    header:{
        alignItems: 'center',
    },
    hIcon:{
        padding:25,
        borderRadius:100,
        ...stylesVar.backgroundPrimary,
    },
    hTitle:{
        marginTop:10,
        textAlign: 'center',
        ...stylesVar.titlePrimary,
        fontSize:22,
        
    },
    body:{
        marginVertical:15,
    },
    bDescription:{
        ...stylesVar.titleSecondary,
        opacity:0.6,
        flexWrap:'wrap',
        fontSize:17,
    },
    footer:{
        flexDirection: 'row',
    },
    fButtonPrimary:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:5,
        ...stylesVar.boxPrimary
    },
    fButtonPrimaryLabel:{
        padding:12,
        ...stylesVar.buttonLabelPrimary
    },
    fButtonSecondary:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:5,
        ...stylesVar.strokeBoxPrimary
    },
    fButtonSecondaryLabel:{
        padding:12,
        ...stylesVar.buttonLabelSecondary
    },
})
export default styles