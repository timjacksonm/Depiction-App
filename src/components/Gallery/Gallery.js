import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { firebase } from '../../firebase/Config';
import { FontAwesome } from '@expo/vector-icons';
const storage = firebase.storage();


export default function Gallery() {
    const [imageList, setImageList] = useState([])
    
    const getImageList = async () => {
        setImageList([])
        const userEmail = firebase.auth().currentUser.email.split('@');
        const folderName = userEmail[0];
        const storageRef = storage.ref(`${folderName}/Images`)
        try {
            const imageData = await storageRef.listAll();
            imageData.items.forEach(imageRef => {
                getImageData(imageRef);
            })    
        } catch(error) {
            console.log(error)
        };
    }

    const getImageData = async (imageRef) => {
        try {
            const promiseReturn = await imageRef.getMetadata();
            const urlString = await imageRef.getDownloadURL();
            let customMeta = ''
            if (promiseReturn.customMetadata === undefined) {
                customMeta = {
                    title: 'default',
                    date: 'defaultDate'
                }
            } else {
                customMeta = {
                    title: promiseReturn.customMetadata.title,
                    date: promiseReturn.customMetadata.date
                }
            }
            setImageList((prevState) => (prevState.concat([
                {
                    url: urlString,
                    ...customMeta
                }
            ])
        ))
    } catch(error) {
        console.log(error);
    };
}

    // useEffect(() => {
    //     console.log(imageList)
    // }, [JSON.stringify(imageList)])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
            <ScrollView>
            <FontAwesome onPress={getImageList} style={styles.refresh} name="refresh" size={30} color="black" />
            {imageList && imageList.map(({ url, title, date }) => (
            <View key={url} style={{justifyContent: 'center'}}>
                <Image style={{width: 350, height: 400}} source={{uri: url}}/>
                <Text style={{textAlign: 'center'}} >{`${title}`}</Text>
                <Text style={{textAlign: 'center'}} >{`${date}`}</Text>
            </View>
            ))}
            </ScrollView>
        </View> 
        )
    }

    const styles = StyleSheet.create({
        refresh: {
            alignSelf: 'center',
            padding: 5
        }
    })
