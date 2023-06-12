import { StyleSheet } from 'react-native'
import { StyledVariables, StyledColors } from '../../styles'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
    isChecked: {
        backgroundColor:'#25CE11',
        height: 25,
        width: 25,
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
    },
    notChecked: {
        ...StyledColors.background.Secondary,
        height: 25,
        width: 25,
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'#888888'
    },
    label:{
        marginLeft: 10,
        ...StyledVariables.text.Medium.Primary
    }
})

export default styles;