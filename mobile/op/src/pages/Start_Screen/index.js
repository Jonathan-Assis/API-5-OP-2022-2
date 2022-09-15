import React, {Component} from 'react';
import {  View,  Image,  Text,Animated,Button} from 'react-native';
import styles from './styles';


/* Logo */
import Logo from '../../assets/Logo/OP.png';

class Start_Screen extends Component {
  state = {
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
    loadingSpinner: false,
  };
  
  componentDidMount() {
    
    const {LogoAnime, LogoText} = this.state;
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 2000,
        useNativeDriver: false,
      }).start(),

      Animated.timing(LogoText, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]).start(() => {
      this.setState({
        loadingSpinner: true,
      });
    });
  }
  render() { 
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.LogoAnime,
            top: this.state.LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
          }}>
          <Image source={Logo} />
        </Animated.View>
        <Animated.View style={{opacity: this.state.LogoText}}>
          <Text style={styles.logotext}> OP </Text>
          <Button
      title="Ir para Termos de Uso"
      onPress={() => this.props.navigation.navigate('User_Term')}/>
        </Animated.View>
      </View>
    
    );
    
  }
}

export default Start_Screen;