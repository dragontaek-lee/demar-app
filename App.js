import { React, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Write, Login, SignIn, Main, Result } from "./screens";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} options={{view: onLayoutRootView}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{view: onLayoutRootView}}/>
        <Stack.Screen name="Main" component={Main} options={{view: onLayoutRootView}}/>
        <Stack.Screen name="Write" component={Write} options={{view: onLayoutRootView}}/>
        <Stack.Screen name="Result" component={Result} options={{view: onLayoutRootView}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;