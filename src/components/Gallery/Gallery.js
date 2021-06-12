import React, { useState, useEffect } from 'react'
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { firebase } from '../../firebase/Config';
const storage = firebase.storage();
const storageRef = storage.ref('Images');

export default function Gallery() {
    const [imageList, setImageList] = useState([])
    
    // const updateMeta = async () => {
    //     try {
    //         const forestRef = await storageRef.child('image3.jpg');
    //         var metadata = {
    //             customMetadata: {
    //               'title': 'Dusk Air Travel',
    //               'date': 'June 9, 2021'
    //             }
    //           };
    //         forestRef.updateMetadata(metadata);
    //         console.log('test')
    //         } catch(error) {

    //         }
    //     }

    const getImageList = async () => {
        setImageList([]) // resets image list
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
            setImageList((prevState) => (prevState.concat([
                {
                    url: urlString,
                    title: promiseReturn.customMetadata.title,
                    date: promiseReturn.customMetadata.date
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
            {imageList.length > 0 ? imageList.map(({ url, title, date }) => (
            <View key={url} style={{justifyContent: 'center'}}>
                <Image style={{width: 350, height: 400}} source={{uri: url}}/>
                <Text>{`${title}`}</Text>
                <Text>{`${date}`}</Text>
            </View>
            )) : <Button title={'click 4 images'} onPress={getImageList} />}
            </ScrollView>
        </View> 
        )
    }
