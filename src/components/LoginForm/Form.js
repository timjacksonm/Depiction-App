import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { globalStyles } from '../Styles/Global';
import { Octicons, Fontisto, AntDesign } from '@expo/vector-icons';
import { firebase } from '../../firebase/Config';

export default function Form(props) {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorScreen, setErrorScreen] = useState(null)
  
  const onLoginPress = async (email, password) => {
    setIsLoading(true);
    setErrorScreen(null); 
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
        if (response.user.uid != null) {
          props.props.setAuthPass();
        }
    } catch (error) {
      setIsLoading(false);
      setErrorScreen(error.toString());
      console.log(error);
    }
  };
    return (
      <View style={styles.loginContainer}>
        {errorScreen ? <Text style={{color: '#fff'}}>{errorScreen}</Text>: null}
        <View style={styles.inputContainer}>
          <Octicons
            name='mail'
            size={24}
            color='black'
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            onChangeText={(text) => setUserName(text)}
            value={username}
          />
        </View>
        <View style={styles.inputContainer}>
          <Fontisto
            name='locked'
            size={24}
            color='black'
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.optionsContainer}>
          <View style={globalStyles.rowCenter}>
            <AntDesign name='checkcircleo' size={26} color='#fff' />
            <Text style={globalStyles.text}>Remember me</Text>
          </View>
          <Text style={[globalStyles.text, { position: 'absolute', right: 0 }]}>
            Forgot password?
          </Text>
        </View>
        <View style={globalStyles.container}>
            <Button disabled={isLoading} onPress={() => onLoginPress(username, password)} title={'Login'} />
          <View style={styles.testerContainer}>
            <Text style={globalStyles.text}>Continue on tester account?</Text>
            <Button title={'Click Me'} onPress={() => {
              setUserName('DepictionApp@gmail.com');
              setPassword('yAV!UG&c');
            }}/>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  loginContainer: {
    alignSelf: 'center',
    height: 400,
    width: '95%',
  },
  inputContainer: globalStyles.rowCenter,
  optionsContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  testerContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: 'rgba(180, 172, 191, 0.8)',
    height: 60,
    margin: 5,
    borderWidth: 1,
    paddingLeft: 38,
    color: '#000',
    fontSize: 16,
    fontFamily: 'playfairSemiBold',
    flex: 1,
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    zIndex: 1,
  },
});
