import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CaptureScreen from './Capture';
import Gallery from '../Gallery/Gallery';
import { Entypo } from '@expo/vector-icons';

const captureHeader = {
  title: 'Capture',
  headerStyle: {
    backgroundColor: '#588467',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'playfairBold',
  },
};
const Stack = createStackNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Gallery'>
        <Stack.Screen
          name='Gallery'
          component={Gallery}
          options={({ navigation }) => ({
            title: 'Gallery',
            headerStyle: {
              backgroundColor: '#588467',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'playfairBold',
            },
            headerRight: () => (
              // Had to collapse Gallery Header out instead of storing in a variable above like captureHeader. Adds Camera to header with onPress() sends to Capture Screen.
              <View style={{ marginRight: 20 }}>
                <Entypo
                  name='camera'
                  size={28}
                  color='#fff'
                  onPress={() => navigation.navigate('Capture')}
                />
              </View>
            ),
          })}
          headerStyle={{ backgroundColor: 'blue' }}
        />
        <Stack.Screen
          name='Capture'
          component={CaptureScreen}
          options={captureHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
