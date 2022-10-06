import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{ flex: 1 },

    body:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 0,
        ...stylesVar.backgroundSecondary,
        /* backgroundColor: 'red', */
        padding: 24
    },
    header:{
        flexDirection: 'row',
    },
    hContainer:{
        flexDirection: 'row',
        backgroundColor: 'yellow'
        /* flex:1, */
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
        /* flexDirection: 'row',     */ 
        /* backgroundColor: 'purple', */
        padding: 18,
        marginHorizontal: 0
    },

    bContainer: {
        /* flex: 1, */
        backgroundColor: 'red'
    },
    
    bImage:{
        /* alignItems: 'center', */
        /* backgroundColor: 'green' */
    },

    bRow:{
        marginBottom:7,
        borderBottomWidth:1,
        ...stylesVar.lineStrokeSecondary,
        backgroundColor: 'green'
    },

    bTitle:{
        ...stylesVar.titleSecondary,
        marginBottom:3,
        /* backgroundColor: 'blue' */
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
        /* flex:1, */
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin:16,
        ...stylesVar.strokeBoxSecondary,
        ...stylesVar.backgroundPrimary
    },
})

export default styles;