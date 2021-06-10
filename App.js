import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './src/components/Screens/Login';
import Home from './src/components/Screens/Home';

export default function App() {

  const [authPass, setAuthPass] = useState(true);

  const changeAuth = () => {
    setAuthPass(!authPass)
  }

  return (
    <View style={{ height: '100%' }}>
      {authPass ? <Home /> : <Login />}
      <Button
      onPress={changeAuth}
      title='Test'
      />
      <StatusBar style="auto" />
    </View>
  )
}
