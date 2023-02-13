import { StyleSheet, Dimensions } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const {width, height} = Dimensions.get('window')
const CARD_HEIGHT = 250;
const CARD_WIDTH = width * 0.8;
const SPACING_BETWEEN_CARD = width * 0.1 -10;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    hTitle:{
        ...stylesVar.titleSecondary,
        textAlign: 'center',
    },
    header:{
        flexDirection: 'row',
        top: 0,
        marginVertical:10,
    },
    permissionDisable:{
      flex:1,
      padding:16,
      alignItems: 'center',
      justifyContent: 'center',
      ...stylesVar.backgroundPrimary
    },
    permissionDisableTitle:{
      ...stylesVar.titlePrimary,
      color:'#ffffff',
      textAlign: 'center',  
      paddingVertical:5
    },
    permissionDisableDescription:{
      ...stylesVar.textSecondary,
      textAlign: 'center',  
      paddingBottom:10
    },
    permissiondDisableCardContainer:{
      flexDirection: 'row'
    },
    permissionDisableCard:{
      flex:1,
      elevation: 2,
      padding:14,
      ...stylesVar.boxSecondary,
      marginHorizontal: 16,
    },
    permissionDisableCardLabel:{
      textAlign:'center',
      ...stylesVar.buttonLabelSecondary,
    },
    permissionDisableMarker:{
      width:150, height:150, color:'#DD4B3E'

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

    BottomScrollView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    
    bCard: {
      position: "relative",
      elevation: 2,
      ...stylesVar.backgroundSecondary,
      borderRadius: 10,
      marginHorizontal: 10,
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
      overflow: "hidden",
    },
    bCardImage: {
      flex: 1,
      width: "100%",
      alignSelf: "center",
    },
    bCardBody: {
      flex:0.8,
      paddingHorizontal: 10,
      paddingTop: 10,
    },
    bCardBodyInformation:{
      fontSize:12,
    },

    bCardBodyTitle: {
      ...stylesVar.titleSecondary,
      top:-5
    },
    bCardBodyDescription: {
      fontSize: 12,
      color: "#444",
    },
    bCardFooter: {
      flex:1,
      alignItems: 'center',
      justifyContent:'center',
      marginTop: 5
    },
    bCardFooterButton: {
      width: "100%",
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bCardFooterButtonLabel: {
      textAlign:'center',
      ...stylesVar.buttonLabelSecondary,
      fontWeight:'bold'
    },
})

export default styles;