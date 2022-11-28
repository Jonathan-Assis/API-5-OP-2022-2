import { Dimensions, StyleSheet } from 'react-native';
import stylesVar from '../../styles/stylesVar';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        flex: 1,
        ...stylesVar.backgroundSecondary,
        alignItems: 'center',
        justifyContent: 'center'
        //justifyContent: 'space-between',
    },
    indicatorContainer:{
        position: 'absolute',paddingTop:50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    indicatorCircle:{
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        elevation:3,
        margin: 8,
    },
    squareBackground:{
        width: height,
        height: height,
        backgroundColor: '#fff',
        borderRadius: 90,
        position: 'absolute',
        top: -height * 0.75,
        left: -height * 0.4,
    },
    exitButton:{
        position: 'absolute',
        zIndex:1,
        elevation:30,
        top: 14,
        right: 14,
        borderRadius:30,
        padding:5,
        opacity:0.7,
    },
    walkthroughContainer:{
        width,
        alignItems: 'center',
        padding:16
    },
    wtHeader:{
        flex:0.6,
        justifyContent:'center',
        alignItems: 'center',
    },
    wtHeaderTitle:{
        color:'#fff',
        fontWeight:'800',
        fontSize:24,
    },
    wtBody:{
        flex:0.5
    },
    wtBodyTitle:{
        paddingTop:10,
        color:'#fff',
        fontWeight:'800',
        fontSize:28,
    },
    wtBodyDescription:{
        paddingTop:10,
        color:'#fff',
        fontWeight:'400',
        fontSize:18,
        textAlign:'left',
    }
   
})

export default styles;