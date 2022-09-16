import { StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const styles = StyleSheet.create({
    container:{
        ...stylesVar.bgSecondary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding:10
    },
    bTextPrimary:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30
    },
    bTextInput: {
        ...stylesVar.BoxPrimary,
        width: 300,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: stylesVar.bgPrimary.backgroundColor
    },
    button: {
        ...stylesVar.BoxPrimary,
        ...stylesVar.bgPrimary,
        width: 300,
        paddingVertical: 5,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: stylesVar.InputText.fontSize,
        color: '#FFF'
    }
})

export default styles;