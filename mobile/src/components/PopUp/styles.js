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
    },
    body:{
        marginVertical:15,
    },
    bDescription:{
        ...stylesVar.titleSecondary,
        textAlign: 'center',
        opacity:0.6,
        flexWrap:'wrap',
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
        padding:10,
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
        padding:10,
        ...stylesVar.buttonLabelSecondary
    },

    modalTermos: {
        flex:1,
        padding:15,
        marginHorizontal:20,
        marginVertical:25,
        alignItems: 'center',
        ...stylesVar.boxSecondary
    },

    headerTermos:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    hTermosTitle: {
        ...stylesVar.titlePrimary,
        paddingLeft:5,
        marginRight:5 
    },
    hTermosCreatedAt: {
        fontSize:12,
        fontWeight: 'bold',
    },

    bodyTermos: {
        marginVertical:10,
        borderColor:'#D4D4D4',
        borderWidth:1.5,
        borderRadius:10,
        padding:10
    },

    bTermosDescription: {
        fontSize:14,
    },

    bTermosCheckBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    fTermosButtonEnabled:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:5,
        ...stylesVar.boxPrimary,
        padding: 10
    },

    fTermosButtonDisabled:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:5,
        backgroundColor: '#C4C4C4',
        borderRadius: 16,
        padding: 10
    },

    fTermosButtonLabel:{
        ...stylesVar.titleTertiary,
        textAlign: 'center',
    }
})
export default styles