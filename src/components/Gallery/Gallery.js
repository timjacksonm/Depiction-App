import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { firebase } from '../../firebase/Config';
import { FontAwesome } from '@expo/vector-icons';
const storage = firebase.storage();

export default function Gallery() {
  const [imageList, setImageList] = useState([]); //When downloaded, contains an array of images from storage bucket on firebase.

  const getImageList = async () => {
    setImageList([]);
    const userEmail = firebase.auth().currentUser.email.split('@');
    const folderName = userEmail[0];
    const storageRef = storage.ref(`${folderName}/Images`); //Creates or References current logged in users folder of Images.
    try {
      const imageData = await storageRef.listAll();
      imageData.items.forEach((imageRef) => {
        getImageData(imageRef);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getImageData = async (imageRef) => {
    try {
      const promiseReturn = await imageRef.getMetadata();
      const urlString = await imageRef.getDownloadURL();
      let customMeta = '';
      if (promiseReturn.customMetadata === undefined) {
        // if no metadata on image - adds default parameters to fields so map() -> component doesn't fail.
        customMeta = {
          title: 'default',
          date: 'defaultDate',
        };
      } else {
        customMeta = {
          title: promiseReturn.customMetadata.title,
          date: promiseReturn.customMetadata.date,
        };
      }
      setImageList((prevState) =>
        prevState.concat([
          // Adds Image object to state with below info.
          {
            url: urlString, // image url
            ...customMeta, // metadata i.e title: & date:
          },
        ])
      );
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   async () => {

  // });

  return (
    <View style={styles.defaultContainer}>
      <ScrollView>
        <FontAwesome
          onPress={getImageList}
          style={styles.refresh}
          name='refresh'
          size={30}
          color='black'
        />
        {imageList &&
          imageList.map(({ url, title, date }) => (
            <View key={url} style={{ justifyContent: 'center' }}>
              <Image style={styles.photo} source={{ uri: url }} />
              <Text style={{ textAlign: 'center' }}>{`${title}`}</Text>
              <Text style={{ textAlign: 'center' }}>{`${date}`}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  refresh: {
    alignSelf: 'center',
    padding: 5,
  },
  photo: {
    width: 350,
    height: 400,
  },
});
