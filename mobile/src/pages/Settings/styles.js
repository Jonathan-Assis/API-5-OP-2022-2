import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        padding: 18,
        ...stylesVar.backgroundPrimary
    },

    header:{
        alignItems: 'center',
    },

    hTitle:{
        marginBottom: 10,
        ...stylesVar.titleTertiary
    },

    body:{
        flex: 1,
        width: '100%',
        marginHorizontal: 0,
    },
    
    
    hImage:{
        marginBottom: 10,
        alignItems: 'center'
    },

    hImageStyle: {
        width: 140,
        height: 140,
        borderRadius: 100,
        overflow: "hidden",
        borderWidth: 2,
        borderColor:'#3429A8'
    },

    bEmailBox:{
        padding:10,
    },

    bTitle:{
        marginBottom:5,
        ...stylesVar.titleTertiary
    },
    
    bText:{
        ...stylesVar.textSecondary
    },
    
    fLabel:{
        textAlign:'center',
        paddingHorizontal:10,
        ...stylesVar.titleTertiary
    },
    
    fButton:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin:10,
        ...stylesVar.strokeBoxSecondary
    },

    tButton:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop:220,
        ...stylesVar.strokeBoxSecondary
    },

    footer:{
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'        
    },
})

export default styles;