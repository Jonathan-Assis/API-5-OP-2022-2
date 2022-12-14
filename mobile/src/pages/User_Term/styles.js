import { StyleSheet} from 'react-native';
import stylesVar from "../../styles/stylesVar";

const styles = StyleSheet.create({

  container:{
    flex:1,
    ... stylesVar.backgroundPrimary,
  },
  bTextPrimary: {
        top:5,
        fontWeight: "bold",
        fontSize: 22,
        alignSelf: 'center',
        color: '#FFF'
  },

  bTextSecondary:{
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 18
},
  body: {
    flex:1,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    ... stylesVar.backgroundSecondary,
    borderRadius: 100 / 5
  },
  button:{
        margin: 16,
        ... stylesVar.boxTertiary.backgroundColor,
        ... stylesVar.strokeBoxSecondary,
        padding: 8
  },

  buttonDisabled:{
    margin: 16,
    backgroundColor: '#999',
    borderRadius: 16,
    padding: 10
 },

 bButtontext:{
    ... stylesVar.titleTertiary,
      textAlign: 'center',
  }

});

export default styles;