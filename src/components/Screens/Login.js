import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/background.jpg')} style={styles.image}>
      <Text style={styles.title}>Depiction</Text>
      <View>
        <TextInput></TextInput>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    fontFamily: 'playfairExtraBold',
    padding: 50,
    color: 'white',
    fontSize: 44,
    textAlign: 'center',
  }
});