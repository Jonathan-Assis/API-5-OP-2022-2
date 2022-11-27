import { StyleSheet, Dimensions } from 'react-native';
import stylesVar from '../../styles/stylesVar';

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
        ...stylesVar.backgroundSecondary,
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
        ...stylesVar.titleSecondary,    
    },
    fButton:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:5,
        paddingLeft:20,
        ...stylesVar.boxPrimary
    },
    fButtonLabel:{
        padding:16,
        alignItems: 'center',
        ...stylesVar.buttonLabelPrimary
    },

    bottomSheetContainer:{
        ...stylesVar.backgroundSecondary,
        height:SCREEN_HEIGHT,
        width:'100%',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25
    },
    modalContainer:{
        flex:1,
        ...stylesVar.backgroundSecondary
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
        ...stylesVar.backgroundSecondary
      },
      bsImageLabel:{
        paddingVertical:5
      },
      bsBairro:{
        flexDirection:'row',
        alignItems: 'center',
        position:'absolute',
        right:14,
        bottom:3
      },
      bsBairroTitle:{
        textAlign: 'center',
        ...stylesVar.titleTertiary,
        fontSize:12,
        marginLeft:5,
        textShadowColor: '#000',
        textShadowRadius: 3,
        textShadowOffset:{
          width: 0.5,
          height: 0.5
        }
      },
      
      bsData:{
        textAlign: 'center',
        ...stylesVar.titleTertiary,
        fontSize:12,
        marginLeft:5,
        textShadowColor: '#000',
        textShadowRadius: 3,
        textShadowOffset:{
          width: 0.5,
          height: 0.5
        }
      },
      
      bsTipo:{
        bottom:3,
        flexDirection: 'row',
        alignItems: 'center',
      },

      bsInfoContainer:{
        paddingTop:10
      },
      
      bsTipoTitle:{
        marginLeft:5,
      },
      bsDescricao:{
        marginVertical:10
      },
      bsDescricaoText:{
        ...stylesVar.titleSecondary,
      },
  
      bsApoio:{
        flexDirection: 'row',
        alignItems: 'center',
      },
  
      bsApoioNumero:{
        ...stylesVar.buttonLabelSecondary
      },
      bsApoiar:{
        ...stylesVar.boxPrimary,
        padding: 10,
        marginVertical:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      bsApoiarLabel:{
        textAlign:'center',
        ...stylesVar.titleTertiary,
    },
      bsContainer:{
        marginBottom:10,
        ...stylesVar.boxPrimary,
        elevation:5
      },
})
export default styles