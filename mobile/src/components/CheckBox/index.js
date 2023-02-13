import { TouchableOpacity, Text, View } from "react-native";
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import styles from './styles'

export function CheckBox({title, checked = false, ...rest}){
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}
            {...rest}
        >
            {
                checked ?
                    <Animated.View
                        style={styles.isChecked}
                        entering={ZoomIn}
                        exiting={ZoomOut}
                    >
                        <Feather 
                            name="check"
                            size={20}
                            color='#FFF'
                        />
                    </Animated.View>
                :
                    <View style={styles.notChecked} />
            }
            
            <Text 
                style={styles.label}
                numberOfLines={1}
                textBreakStrategy='balanced'
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}