import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{ flex: 1 },

    body:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding: 18,
        marginHorizontal: 0,
        ...stylesVar.backgroundPrimary
    },

    footer:{
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'        
    },
    
    image:{
        marginBottom: 10
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
})

export default styles;