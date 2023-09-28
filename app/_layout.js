import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

 const layout = () => {
  const [fontLoaded] = useFonts({
    SoraBold: require('../assets/Sora-Bold.ttf'),
    Soramid: require('../assets/Sora-Regular.ttf'),
    Soraxxl: require('../assets/Sora-ExtraBold.ttf'),
    flamabold: require('../assets/Flama-Bold.otf')
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) return null;

  return (

    <>
        <Stack onLayout={onLayoutRootView}/>
        <Toast />
        </>
  )
}

export default layout