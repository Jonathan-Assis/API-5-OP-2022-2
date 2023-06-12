import { StyleSheet } from 'react-native'
import { StyledVariables, StyledColors } from '../../styles'

const styles = StyleSheet.create({
    container:{
        ...StyledColors.background.Secondary,
        flex: 1
    },

    header:{
        marginHorizontal:16,
        marginTop:16,
        paddingBottom:7
    },

    hTitle:{
        ...StyledVariables.text.Large.Primary,
        flexWrap:'wrap'
    },

    body: {
        flex: 1,
        alignItems: 'center',
    },

    bTitle:{
        ...StyledVariables.text.Medium.Primary
    },
    bIcon:{
        ...StyledColors.icon.White,
    },
    bButton:{
        ...StyledVariables.box.Colored.Primary,
        /* alignItems: 'center',
        justifyContent: 'space-evenly', */
        padding:10,
        margin:10,
        flex:1
        /* width:150,
        height:150, */
    },
    bButtonTitle:{
        ...StyledVariables.text.Medium.Tertiary,
        padding:5
    },

    bRow:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap:'wrap',
    },
    bColumn:{
        flex:1
        /* alignItems: 'center',
        justifyContent: 'space-around', */

    }
})

export default styles;