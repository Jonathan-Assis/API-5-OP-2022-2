import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        ...stylesVar.backgroundSecondary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding:10,
        marginTop: 50
    },
    bTextPrimary:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30
    },
    bTextInput: {
        ...stylesVar.boxSecondary,
        width: 300,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: stylesVar.strokeBox.backgroundColor
    },
    button: {
        ...stylesVar.boxPrimary,
        ...stylesVar.backgroundPrimary,
        width: 300,
        paddingVertical: 5,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: stylesVar.inputText.fontSize,
        color: '#FFF'
    }
})

export default styles;