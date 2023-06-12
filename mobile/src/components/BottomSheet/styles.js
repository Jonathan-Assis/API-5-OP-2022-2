import { StyleSheet, Dimensions } from 'react-native'
import { StyledVariables, StyledColors } from '../../styles'

const {height:SCREEN_HEIGHT}=Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-end',
        backgroundColor: '#00000085'
    },
    modal:{
        padding:15,
        borderTopRightRadius:16,
        borderTopLeftRadius:16,
        ...StyledColors.background.Secondary,
    },
    
footer:{
    paddingVertical:5
    },
    fheader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:5
    },
    fTitle:{
        marginBottom:10,
        ...StyledVariables.text.Medium.Primary,    
    },
    fButton:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:5,
        paddingLeft:20,
        ...StyledVariables.box.Colored.Primary
    },
    fButtonLabel:{
        padding:16,
        alignItems: 'center',
        ...StyledVariables.text.Regular.Secondary
    },

    bottomSheetContainer:{
        ...StyledColors.background.Secondary,
        height:SCREEN_HEIGHT,
        width:'100%',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25
    },
    modalContainer:{
        flex:1,
        ...StyledColors.background.Secondary
      },
      exitButton:{
        position: 'absolute',
        zIndex:1,
        elevation:1,
        top: 14,
        right: 14,
        borderRadius:30,
        padding:5,
        opacity:0.9,
    },
      bsImage:{
        width: '100%',
        height:'100%',
      },
      bsHeader:{
        height:300,
      },
      bsInfo:{
        flex:1,
        paddingHorizontal:14,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        ...StyledColors.background.Secondary
      },
      bsImageLabel:{
        paddingVertical:5,
        flexDirection:'row',
        alignItems: 'center'
      },
      bsCamera:{
        flexDirection:'row',
        alignItems: 'center',
        position:'absolute',
        right:14,
        bottom:3
      },
      bsBairroTitle:{
        textAlign: 'center',
        ...StyledVariables.text.Medium.Primary,
      },
      
      bsData:{
        marginBottom:15
      },
      bsBairro:{
        marginBottom:15
      },
      bsDescricao:{
        marginBottom:15
      },
      bsTipo:{
        flexDirection: 'row',
        alignItems: 'center',
      },

      bsInfoContainer:{
        paddingVertical:10,
      },
      bsField:{
        flexDirection: 'row',
        alignItems: 'center',
      },
      bsTipoTitle:{
        marginLeft:5
      },
      bsTitle:{
          ...StyledVariables.text.Medium.Primary,
          marginLeft:5,
        },
        bsSubTitle:{
          ...StyledVariables.text.Medium.Primary,
          fontWeight:'400',
          marginLeft:5,
          borderBottomWidth:0.5
      },

      bsDescricaoText:{
        ...StyledVariables.text.Medium.Primary,
      },
  
      bsApoio:{
        flexDirection: 'row',
        alignItems: 'center',
      },
  
      bsApoioNumero:{
        ...StyledVariables.text.Medium.Purple
      },
      bsApoiar:{
        ...StyledVariables.box.Colored.Primary,
        padding: 10,
        marginVertical:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      bsApoiarLabel:{
        textAlign:'center',
        ...StyledVariables.text.Medium.Tertiary,
    },
      bsContainer:{
        marginBottom:10,
        ...StyledVariables.box.Colored.Primary,
        elevation:5
      },
})
export default styles