import React from 'react'
import Home from '../screens/Home/Home';
import Chat from '../screens/Chat/Chat';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackRoute = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    )
}

export default StackRoute;