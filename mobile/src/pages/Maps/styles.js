import { StyleSheet } from 'react-native'
import { StyledVariables } from '../../styles'

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    header:{
        padding:10,
        alignItems: 'center',
    },
    hTitle:{
        ...StyledVariables.text.Medium.Tertiary,
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
        ...StyledVariables.box.Stroke.Secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fSubCategoryTitle:{
        ...StyledVariables.text.Medium.Tertiary,
        textAlign: 'center',
    },

    fSelectedCategory:{
        ...StyledVariables.box.Colored.Secondary
    },
    fSelectedCategoryTitle:{
        ...StyledVariables.text.Medium.Primary,
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
        ...StyledVariables.box.Colored.Primary,
        borderWidth:1,
        borderColor:'black',
    },
    fButtonSecondary:{
        padding:13,
        marginHorizontal:8,
        flexDirection: 'row',
        alignItems: 'center',
        ...StyledVariables.box.Colored.Secondary,
        borderWidth:1,
        borderColor:'black',
    },
    fButtonLabelPrimary:{
        paddingHorizontal:5,
        ...StyledVariables.text.Medium.Tertiary,
    },
    fButtonLabelSecondary:{
        paddingHorizontal:5,
        ...StyledVariables.text.Medium.Primary,
    },
})

export default styles;