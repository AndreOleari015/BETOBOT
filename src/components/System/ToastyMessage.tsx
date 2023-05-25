import { ToastAndroid } from 'react-native';


export const ToastyMessage = (message: string) => {
    return (
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
        )
    )
}