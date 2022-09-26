import { StyleSheet } from "react-native";
import stylesVar from "../../styles/stylesVar";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      ...stylesVar.backgroundPrimary,
    },
    header: {
      maxHeight:350,
      maxWidth:350
    },
    body:{
      ...stylesVar.titleTertiary,
      fontSize:26
    }
});

export default styles;