import { TextInputProps, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

export type InputDefaultProps = TextInputProps & {
    style?: StyleProp<ViewStyle>,
}
export type InputMessageProps = TextInputProps & {
    style?: StyleProp<ViewStyle>,
    onSendPress?: (event: GestureResponderEvent) => void;
}