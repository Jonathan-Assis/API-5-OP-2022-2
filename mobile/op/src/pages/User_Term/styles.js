import { StyleSheet,Dimensions } from 'react-native';
import stylesVar from "../../styles/stylesVar";

const { width , height } = Dimensions.get('window');


const styles = {

  container:{
    flex:1,
    ... stylesVar.backgroundPrimary,
  },
  bTextPrimary: {
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
    marginTop: 15,
    marginBottom: 15,
    height: height * .7,
    marginLeft: 10,
    marginRight: 10,
    ... stylesVar.backgroundSecondary,
    borderRadius: 100 / 5
  },
  button:{
        marginLeft: '30%',
        marginRight: '30%',
        marginBottom: 15,
        backgroundColor: '#136AC7',
        borderRadius: 100,
        padding: 10
  },

  buttonDisabled:{
    marginLeft: '30%',
    marginRight: '30%',
    marginBottom: 15,
    backgroundColor: '#999',
    borderRadius: 100,
    padding: 10
 },

 bButtontext:{
      fontSize: 14,
      color: '#FFF',
      alignSelf: 'center'
  }

}

export default styles;