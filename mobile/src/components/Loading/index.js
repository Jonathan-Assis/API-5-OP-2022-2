import React, { useEffect } from 'react';
import { View, Text, Animated } from 'react-native';

import styles from './styles'

export default function Loading({ loading, children, title }) {
    const animations = {
        one: new Animated.Value(0),
        two: new Animated.Value(0),
        three: new Animated.Value(0),
    }

    function onAnimate(animation, nextAnimation){
        Animated.sequence([
            Animated.timing(animation, {
                toValue:-15,
                duration:390,
                useNativeDriver: true,
            }),
            Animated.timing(animation, {
                toValue:15,
                duration:390,
                useNativeDriver: true,
            })
        ]).start()
        setTimeout(nextAnimation, 300)
    }

    function onStartAnimate(){
        function onThreeAnimation(){
            onAnimate(animations.three, () =>{
                setTimeout(onStartAnimate, 300)
            })
        }
        function onTwoAnimation(){
            onAnimate(animations.two,onThreeAnimation)
        }
        onAnimate(animations.one,onTwoAnimation)
    }

    useEffect(()=>{
       onStartAnimate()
    })

    return (
        loading
            ? (
                <View style={styles.container}>
                    {
                        title && 
                            <Text style={styles.title}>{title}</Text>
                    }
                        <View style={styles.body}>
                        <Animated.View style={[
                            styles.bBall, 
                            {transform:[{translateY: animations.one}]}]} />
                        <Animated.View style={[
                            styles.bBall,
                            {transform:[{translateY: animations.two}]}
                            ]} />
                        <Animated.View style={[
                            styles.bBall,
                            {transform:[{translateY: animations.three}]}
                            ]} />
                    </View>
                </View>
            )
            : <>{ children }</>
    );
}