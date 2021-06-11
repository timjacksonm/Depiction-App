import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Form from '../LoginForm/Form';
import { globalStyles } from '../Styles/Global';

export default function Login(props) {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.image}>
      <View style={styles.titleContainer}>
        <Text style={[globalStyles.titleText, styles.title]}>De</Text>
        <Text style={[globalStyles.titleText, styles.titleColor]}>pic</Text>
        <Text style={[globalStyles.titleText, styles.title]}>tion</Text>
      </View>
      <Form props={props} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
  },
  titleContainer: {
    height: 150,
    marginTop: '10%',
    marginBottom: '12%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
  },
  titleColor: {
    color: '#E39B97',
    fontSize: 50,
  },
});
