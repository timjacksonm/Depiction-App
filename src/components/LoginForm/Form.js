import React from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { globalStyles } from '../Styles/Global';
import { Octicons, Fontisto, AntDesign } from '@expo/vector-icons';

export default function Form() {
    return (
        <View style={styles.loginContainer}>
            <View style={styles.inputContainer}>
                <Octicons name="mail" size={24} color="black" style={styles.searchIcon} />
                <TextInput style={styles.input} placeholder='Email' />
            </View>
            <View style={styles.inputContainer} >
                <Fontisto name="locked" size={24} color="black" style={styles.searchIcon} />
                <TextInput style={styles.input} placeholder='Password' />
            </View>
            <View style={styles.optionsContainer}>
                <View style={globalStyles.rowCenter}>
                    <AntDesign name="checkcircleo" size={26} color="#fff" />
                    <Text style={globalStyles.text}>Remember me</Text>
                </View>
                <Text style={[globalStyles.text, {position: 'absolute', right: 0}]}>Forgot password?</Text>
            </View>
            <View style={globalStyles.container}>
                <Button title={'Login'} color={'#84ACBF'} />
                <Text style={globalStyles.text}>Continue as tester? Click here</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        alignSelf: 'center',
        height: 400,
        width: '95%',
      },
      inputContainer:
        globalStyles.rowCenter,
      optionsContainer: {
        marginLeft: 15,
        marginRight: 15
    },
      input: {
        backgroundColor: 'rgba(180, 172, 191, 0.8)',
        height: 60,
        margin: 5,
        borderWidth: 1,
        paddingLeft: 38 ,
        color: '#000',
        fontSize: 16,
        fontFamily: 'playfairSemiBold',
        flex: 1,
      },
      searchIcon: {
        position: 'absolute',
        left: 15,
        zIndex: 1
      }
})
