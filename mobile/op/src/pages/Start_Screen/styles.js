import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3455AA",
  },

  body: {
    flex: 1,
    justifyContent:'center',
    alignItems: "center",
    padding:10
  },

  logotype: {
    height: "46%",
    width: "100%",
  },
  logotext: {
    color: '#FFFFFF',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 50,
    marginTop: 20,
    marginBottom: '30%',
    fontWeight: '350',    
  },
});

export default styles;