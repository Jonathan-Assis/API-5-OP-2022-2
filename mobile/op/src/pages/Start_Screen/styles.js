import { StyleSheet } from "react-native";
import stylesVar from "../../styles/stylesVar";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      ... stylesVar.backgroundPrimary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logotext: {
      color: '#FFFFFF',
      marginLeft: '9%',
      fontFamily: 'GoogleSans-Bold',
      fontSize: 60,
      marginBottom: '20%',
      fontWeight: '600',
      fontWeight: "bold",
    },
  logotype: {
    marginLeft: '9%',
    height: "46%",
    width: "100%",
  },
});

export default styles;