import { StyleSheet,Dimensions } from 'react-native';
const { width , height } = Dimensions.get('window');


const styles = {

  container:{
    flex:1,
    backgroundColor: '#3455AA'
  },
  bTextPrimary: {
        fontWeight: "bold",
        fontSize: 22,
        alignSelf: 'center'
  },

  text:{
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 18
},
  tcContainer: {
      marginTop: 15,
      marginBottom: 15,
      height: height * .7,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: '#D9D9D9',
      borderRadius: 20 / 2
  },
  button:{
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15,
        backgroundColor: '#136AC7',
        borderRadius: 5,
        padding: 10
  },

  buttonDisabled:{
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10
 },

  buttonLabel:{
      fontSize: 14,
      color: '#FFF',
      alignSelf: 'center'
  }

}

export default styles;