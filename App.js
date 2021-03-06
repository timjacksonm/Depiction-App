import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './src/components/Screens/Login';
import Home from './src/components/Screens/Home';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const getFonts = () =>
  Font.loadAsync({
    playfairRegular: require('./src/assets/fonts/PlayfairDisplay-Regular.ttf'),
    playfairItalic: require('./src/assets/fonts/PlayfairDisplay-Italic.ttf'),
    playfairSemiBold: require('./src/assets/fonts/PlayfairDisplay-SemiBold.ttf'),
    playfairBold: require('./src/assets/fonts/PlayfairDisplay-Bold.ttf'),
    playfairExtraBold: require('./src/assets/fonts/PlayfairDisplay-ExtraBold.ttf'),
  });

export default function App() {
  const [authPass, setAuthPass] = useState(false); // Changes to true when promise for login is not rejected. Successful attempt.
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log('error')}
      />
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style='light' />
        {authPass ? <Home /> : <Login setAuthPass={() => setAuthPass(true)} />}
      </View>
    );
  }
}
