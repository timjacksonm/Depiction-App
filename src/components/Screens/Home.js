import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CaptureScreen from './Capture';
import { Entypo } from '@expo/vector-icons'; 

function GalleryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Gallery of pictures goes here</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
          options={
            ({ navigation }) => ({
              title: 'Gallery',
              headerStyle: {
                backgroundColor: '#588467',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontFamily: 'playfairBold',
              },
              // Had to collapse this out instead of storing in a variable. Adds Camera to header with onPress() sends to Capture Screen.
              headerRight: () => 
              (
              <View style={{marginRight: 20}}>
                <Entypo name="camera" size={28} color="#fff" onPress={() => navigation.navigate('Capture')} />
              </View>
              )
              })}
              headerStyle={{backgroundColor: 'blue'}}/>
        <Stack.Screen name="Capture" component={CaptureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}