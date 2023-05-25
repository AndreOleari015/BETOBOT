import { View } from 'react-native';
import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';

import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { Inter_900Black, Inter_600SemiBold, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import StackRoute from './src/routes/Stack.routes';

export default function App() {

  const [fontsLoading] = useFonts({
    Inter_900Black, Inter_600SemiBold, Inter_700Bold
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoading) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoading]);

  if (!fontsLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      <View
        style={{ flex: 1 }}
        onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <StackRoute />
      </View>
    </NavigationContainer>
  );
}
