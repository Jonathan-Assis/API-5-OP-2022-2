import { StyleSheet } from 'react-native'
import { StyledVariables, StyledColors } from '../../styles'

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        padding: 18,
        ...StyledColors.background.Primary
    },

    header:{
        alignItems: 'center',
    },

    hTitle:{
        marginBottom: 10,
        ...StyledVariables.text.Medium.Tertiary
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
        borderColor:'#4444EE'
    },

    bEmailBox:{
        padding:10,
    },

    bTitle:{
        marginBottom:5,
        ...StyledVariables.text.Medium.Tertiary
    },
    
    bText:{
        ...StyledVariables.text.Medium.Secondary
    },
    
    fLabel:{
        textAlign:'center',
        paddingHorizontal:10,
        ...StyledVariables.text.Medium.Tertiary
    },
    
    fButton:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginVertical: 5,
        marginHorizontal:10,
        ...StyledVariables.box.Stroke.Secondary
    },

    footer:{
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})

export default styles;