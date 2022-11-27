import { React, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main, Login } from "./screens";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    'JejuMyeongjo': require('./assets/fonts/JejuMyeongjo-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded){
    return null;
  }

  return (
    <Login options={{view: onLayoutRootView}} />
  );
}

export default App;