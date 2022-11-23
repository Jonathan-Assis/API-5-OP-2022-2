import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

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
    searchBox: {
        position:'absolute', 
        marginTop: 20, 
        flexDirection:"row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf:'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
      },
      chipsScrollView: {
        position:'absolute', 
        top: 80, 
        paddingHorizontal:10
      },
      chipsIcon: {
        marginRight: 5,
      },
      chipsItem: {
        flexDirection:"row",
        backgroundColor:'#fff', 
        borderRadius:20,
        padding:8,
        paddingHorizontal:20, 
        marginHorizontal:10,
        height:35,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
      },
      scrollView: {
       flex:1
      },
      endPadding: {
        paddingRight: '80%',
      },
      card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: "#ccc",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: 220,
        width: '15%',
      },
      cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
      },
      textContent: {
        flex: 2,
        padding: 10,
      },
      cardtitle: {
        fontSize: 12,
        fontWeight: "bold",
        // marginTop: 5,
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

    bottomList:{
      flex:1,
      marginHorizontal:12,
      paddingBottom:72,
    },
    bottomCardContainer:{
      marginBottom:10,
      ...stylesVar.boxPrimary,
      elevation:5
      
    },
    bottomCard:{
      flexDirection:'row',
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

     // ...stylesVar.strokeBoxSecondary
    },
    bCardTextFooter:{
      ...stylesVar.titleTertiary,
    }

    
    //...stylesVar.textPrimary










/*     hButtons:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    hButtonPrimary:{
        padding:13,
        marginHorizontal:8,
        flexDirection: 'row',
        alignItems: 'center',
        ...stylesVar.boxPrimary,
        borderWidth:1,
        borderColor:'black',
    },
    hButtonSecondary:{
        padding:13,
        marginHorizontal:8,
        flexDirection: 'row',
        alignItems: 'center',
        ...stylesVar.boxSecondary,
        borderWidth:1,
        borderColor:'black',
    },
    hButtonLabelPrimary:{
        paddingHorizontal:5,
        ...stylesVar.titleTertiary,
    },
    hButtonLabelSecondary:{
        paddingHorizontal:5,
        ...stylesVar.titleSecondary,
    }, */
})
//<FontAwesomeIcon icon={faLocationDot} size={60} color='#3429A8' />

export default styles;