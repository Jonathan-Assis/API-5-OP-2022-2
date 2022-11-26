import { StyleSheet, Dimensions } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const {width, height} = Dimensions.get('window')
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_BETWEEN_CARD = width * 0.1 -10;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        //...stylesVar.backgroundPrimary
    },
    hTitle:{
        ...stylesVar.titleSecondary,
        textAlign: 'center',
    },
    header:{
        flexDirection: 'row',
        //position:'absolute',
        top: 0,
        marginVertical:10,
    },
    my:{
        ...stylesVar.backgroundPrimary
    },
    hCategory:{
        padding:8,
        marginHorizontal:6,
        ...stylesVar.boxSecondary,
        justifyContent: 'center',
        alignItems: 'center',
        ...stylesVar.strokeBoxPrimary,
    },
    hSubCategoryTitle:{
        ...stylesVar.titleTertiary,
        color: stylesVar.backgroundPrimary.backgroundColor,
        textAlign: 'center',
        paddingHorizontal:4,
    },

    hSelectedCategory:{
        ...stylesVar.boxPrimary
    },
    hSelectedCategoryTitle:{
        ...stylesVar.titleTertiary,
        textAlign: 'center',  
        paddingHorizontal:4
    },
    hMarkerTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:2
    },

    markerCallout:{
        flexDirection: 'column',
        alignSelf: 'flex-start',
        borderRadius: 6,
        borderColor: stylesVar.backgroundPrimary.backgroundColor,
        backgroundColor: "orange",
        borderWidth: 0.5,
        padding:15,
        width:150
        //...stylesVar.backgroundSecondary
    },
    arrow:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        borderTopColor: stylesVar.backgroundSecondary.backgroundColor,
        borderWidth: 15,
        alignSelf: 'center',
        marginTop: -32
    },
    arrowBorder:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        borderWidth: 15,
        alignSelf: 'center',
        marginTop: -0.5
    },
    name:{
        fontSize:16,
        marginBottom:5,
    },
    image:{
        width:20, height:20
    },



    scrollView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    endPadding: {
      paddingRight: width - CARD_WIDTH,
    },
    card: {
      // padding: 10,
      elevation: 2,
      ...stylesVar.backgroundSecondary,
      borderRadius: 10,
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
      overflow: "hidden",
    },
    cardImage: {
      flex: 2,
      width: "50%",
      height: "50%",
      alignSelf: "center",
    },
    textContent: {
      flex: 2,
      padding: 10,
    },
    cardtitle: {
      fontSize: 12,
      // marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
      width:50,
      height:50,
    },
    marker: {
      width: 30,
      height: 30,
    },
    button: {
      alignItems: 'center',
      marginTop: 5
    },
    signIn: {
      width: '100%',
      padding:5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3
    },
    textSign: {
      fontSize: 14,
      fontWeight: 'bold'
    },

    lineHandler:{
      width:'100%',
      alignSelf: 'center',
    },
    line:{
      width:75,
      height:4.5,
      borderRadius:5,
      ...stylesVar.backgroundPrimary,
      alignSelf: 'center',
      marginVertical:14
    },
    modal:{
      flex:1
    },
    
    bsInfo:{
      flex:1,
      marginHorizontal:14,
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

    bCardRight:{
      flex:1,
      padding:10
    },
    bCardLeft:{
      borderWidth:1,
      borderTopLeftRadius:16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bCardRightHeader:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:5
    },
    bCardRightHeaderPinDateTime:{
      flexDirection:'row',
    },
    bCardRightTextHeader:{
      ...stylesVar.titleTertiary,
      fontSize:14,
    },
    bCardRightTextBody:{
      ...stylesVar.titleTertiary,
    },
    bCardRightBodyApoio:{
      flexDirection:'row',
      alignItems: 'center',
      paddingVertical:8
    },
    bCardRightTextBodyApoio:{
      ...stylesVar.titleTertiary,
      fontSize:14,
    },
    bCardFooter:{
      alignItems: 'center',
      paddingVertical:10
    },
    bCardTextFooter:{
      ...stylesVar.titleTertiary,
    }

})

export default styles;