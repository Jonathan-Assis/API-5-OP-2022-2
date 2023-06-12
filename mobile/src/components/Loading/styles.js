import { StyleSheet } from 'react-native'
import { StyledVariables, StyledColors } from '../../styles'

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        ...StyledColors.background.Secondary
    },
    logo:{
        width:175, 
        height:175,
        color:'#ffffff'
    },
    title: {
        ...StyledVariables.text.Medium.Tertiary,
        fontSize: 22
    }
})

export default styles;