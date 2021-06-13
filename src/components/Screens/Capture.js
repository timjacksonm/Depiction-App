import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; 
import { Camera } from 'expo-camera';
import { firebase } from '../../firebase/Config';
const storage = firebase.storage();
const storageRef = storage.ref('Images');

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if(camera) {
      try {
      const data = await camera.takePictureAsync({ base64: true, exif: true })
      storageRef.putString(data.base64 , 'base64', {contentType: 'image/jpg'}) // get error saying that base64 has invalid character found.
      } catch (error) {
        console.log(error)
      }
    }
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera pictureSize={'640x480'} ref={ref => setCamera(ref)} style={styles.fixedRatio} type={type} ratio={'4:3'} />
      </View>
      <Ionicons onPress={() => {
        setType(
          type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        );
      }} style={styles.flip} name="camera-reverse" size={40} color="black" />
      <FontAwesome style={styles.takePicture} onPress={() => takePicture()} name="circle-thin" size={75} color="white" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },
  takePicture: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 60,
  },
  flip: {
    position: 'absolute',
    right: 15,
    top: 5
  }
});
