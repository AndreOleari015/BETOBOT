import { StyleProp, ViewStyle, TouchableOpacityProps } from "react-native";

export type ButtonDefaultProps = TouchableOpacityProps & {
    style?: StyleProp<ViewStyle>,
}