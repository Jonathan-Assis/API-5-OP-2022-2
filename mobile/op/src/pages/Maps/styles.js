import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    header:{
        padding:10,
        alignItems: 'center',
    },
    hTitle:{
        ...stylesVar.titleTertiary,
        textAlign: 'center',
    },
    footer:{
        padding: 20,
        position:'absolute',
        bottom: 0
    },
    fCategory:{
        width: 100,
        height: 110,
        ...stylesVar.strokeBoxSecondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fSubCategoryTitle:{
        ...stylesVar.titleTertiary,
        textAlign: 'center',
    },

    fSelectedCategory:{
        ...stylesVar.boxSecondary
    },
    fSelectedCategoryTitle:{
        ...stylesVar.titleSecondary,
        textAlign: 'center',    
    },
    fButtons:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    fButtonPrimary:{
        padding:13,
        marginHorizontal:8,
        flexDirection: 'row',
        alignItems: 'center',
        ...stylesVar.boxPrimary,
        borderWidth:1,
        borderColor:'black',
    },
    fButtonSecondary:{
        padding:13,
        marginHorizontal:8,
        flexDirection: 'row',
        alignItems: 'center',
        ...stylesVar.boxSecondary,
        borderWidth:1,
        borderColor:'black',
    },
    fButtonLabelPrimary:{
        paddingHorizontal:5,
        ...stylesVar.titleTertiary
    },
    fButtonLabelSecondary:{
        paddingHorizontal:5,
        ...stylesVar.titleSecondary
    },

})

export default styles;