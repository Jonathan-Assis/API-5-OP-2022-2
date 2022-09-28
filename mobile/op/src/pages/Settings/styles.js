import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        ...stylesVar.backgroundSecondary
    },
    header:{
        flexDirection: 'row',
    },
    hContainer:{
        flexDirection: 'row',
        flex:1,
    },
    hButton:{
        flex:1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding:15
    },
    hButtonLabel:{
        paddingHorizontal:8,
        ...stylesVar.titleSecondary
    },

    body:{
        flex: 1, 
        flexDirection: 'row',     
        padding:18,
    },
    bContainer: {
        flex: 1,
    },
    
    bImage:{
        alignItems: 'center',
    },

    bRow:{
        marginBottom:7,
        borderBottomWidth:1,
        ...stylesVar.lineStrokeSecondary,
    },

    bTitle:{
        ...stylesVar.titleSecondary,
        marginBottom:3
    },
    bText:{
        ...stylesVar.textSecondary
    },

    bRowBox:{
        padding: 5,
        paddingHorizontal:15,
    },

    footer:{
        flexDirection: 'row',
        bottom:4,
        justifyContent: 'flex-end',
    },
    
    fLabel:{
        textAlign:'center',
        paddingHorizontal:10,
        ...stylesVar.titleTertiary
    },

    fButton:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin:16,
        ...stylesVar.strokeBoxSecondary,
    },
})

export default styles;