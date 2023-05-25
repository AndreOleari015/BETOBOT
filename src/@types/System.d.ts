import { StyleProp, ViewStyle } from "react-native";

export type ContainerProps = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>
}

export type MessageProps = {
    type: "bot" | "user",
    stateMessageBot?: boolean,
    message?: string,
}