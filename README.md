<h1 align="center">
   <image src="src/assets/logo.jpg" width="50%"> 
</h1>

<h5 align="center">A Photo App! This project uses React-Native>Expo-Cli, Firebase BaaS & Styled Components.</h5>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#summary">Summary</a> •
  <a href="#improvements">Improvements</a> •
  <a href="#author">Author</a> •
  <a href="#license">License</a>
</p>

## Installation

Two Options Available to get this app up and running on your phone/simulator

<details>
<summary>Expo Go app for IOS and Android (fastest method)</summary>
   
The fastest way to get up and running is to use the Expo Go app on your iOS or Android device. Expo Go allows you to open up apps that are being served through Expo CLI

- 🤖 Android Play Store: (https://play.google.com/store/apps/details?id=host.exp.exponent) - Android Lollipop (5) and greater.
- 🍎 iOS App Store: (https://itunes.com/apps/exponent) - iOS 11 and greater.
   
When the Expo Go app is finished installing, open it up. If you created an account with expo-cli then you can sign in here on the "Profile" tab. This will make it easier for you to open projects in the client when you have them open in development — they will appear automatically in the "Projects" tab of the client app.
   
Last step is to scan the QR Code on this page: (#) via the app
</details>

<details>
<summary>Simulator / Emulator</summary>

- You will need to fork this repository.
- Install dependencies with `npm install`
- Run in your terminal `npm start` or `expo start`

On the local host page left side panel. Run on Android device/emulator | Run on IOS simulator.

If you do not have those options setup. See guides below.

- installing the iOS Simulator (macOS only): (https://docs.expo.io/workflow/ios-simulator/)
- installing an Android emulator: (https://docs.expo.io/workflow/android-studio-emulator/)

</details>

## Screenshots

<details>
  <summary>Show Images</summary>
   
The below gif shows the app connected to my phone.
   
On my phone I take a picture and it automatically uploads to my Firebase storage bucket including metadata 'title: , date: '.
   
Show ImagesAfter refreshing the screen you see the blob file containing the base64 text file named '16183520210613'. The name is a combination of the time the photo was taken and the current date.

<image src="src/assets/demoofapp.gif">


   <h3>The next couple images show me interacting with the app using my Samsung Galaxy s7 Phone.</h3>


      
<details> 

   <summary> Logging into the app with the wrong credentials returns error. </summary>
   
   <image src="src/assets/1s.jpg">
      
</details>

<details>
   
   <summary> Using correct credentials after error, before clicking login. </summary>
   
   <image src="src/assets/2.jpg">
   
</details>
   
<details>
   
   <summary> Home screen which includes the gallery. To load the gallery you have to click the refresh icon. </summary>
   
   <image src="src/assets/3.jpg">
   
</details>
   
<details> 

   <summary> After hitting refresh you see the images populate. The first image is the base64 image taken by me in the gif above. It doesn't display properly at the moment but you can see the metadata was added to the component. More about why it doesn't display properly in the summary of this Readme. </summary>
   
   <image src="src/assets/4.jpg">
      
</details>
   
<details> 

   <summary> Hibbing photos around my house including a flowerbed and my one eyed cat named Zander! </summary>
   
   <image src="src/assets/5.jpg">
      
</details>
   
<details> 

   <summary> Camera in action! Showcasing what the image looks like as you are about to take a photo. </summary>
   
   <image src="src/assets/6.jpg">
      
</details>

</details>

## Summary

I learned a lot during this mini-project. I spent the first 2 1/2 days reading exclusively the react-native / expo docuements page after page. The remaining 4 days I tried my best to apply what I just learned to create this app. Total time spent: A little more than 6 days.

**What did I learn?**

- A entire new framework I have never used before React-Native / Expo-Cli!
- How to use Firebase Authentication.
- How to use Firebase Storage.
- I learned many new Components and their restrictions!
- I utilized a few different libraries with the most interesting being React-Navigation!

**What features / methods does this app do?**

- Log in with credentials! If credentials are incorrect you will get a returned promise with an error!
- Request current stored images from the Firebase storage!
- Take a picture of your own after granting permission to use camera. Once Image is taken, app automatically uploads the base64 string to the Firebase storage bucket!

**Most difficult task?**

<p>Most difficult was figuring out how to use the returned promise from takePictureAsync() (expo method) and get that image to my storage bucket 'Firebase'. The promise gave me an object containing { uri, width, height, exif, base64 } with exif & base64 as optional parameters. I started by giving my method the optional paremeter of { base64: true } so I could utilize the base64 string. I tried uploading that string to firebase but was rejected for unknown character value found. I tried a lot of troubleshooting techniques by researching online. A few include = searching the string with regex to verify if something was at the end. Utilizing different option parameters on the putString() method that firebase requires.</p>
   <p>Eventually I ended up putting the base64 string in a blob and sending the blob as a data_url to firebase. Firebase accepted that. Known issue: Currently the saved image files from storage do not display in the gallery.</p>
   I did take a few of my photos taken with the camera and converted them to png. I converted them using this <a href="https://codebeautify.org/base64-to-image-converter" target="_blank">website</a> which takes a base64 string.
   
Captured images are currently set to a 4:3 aspect ratio and lowest resolution available on my Samsung Galaxy S7 Device. I wasn't going for pretty but most efficient. I was not able to test this app using an IOS device. I did not use a emulator / simulator for testing.

   <h3>This project was created as a task for an Interview. The goals of the project below</h3>
   
- Learn React-Native and create an app.
- The app should allow a user to log in with credentials.
- The app should display a gallery of images taken by the user retrieved from a database (BaaS).
- The gallery of images should show metadta like a title or location. (I used title, date).
- App should request permission to use camera and allow user to take a picture to save to gallery.

## Improvements
      
**What can make this app better?**

- Pictures taken by camera and uploaded to firebase are not in a readable / applicable format once downloaded to display in the gallery. Work around would be to not upload the images and just display them based on their data.uri , however that defeats the purpose of using a BaaS to hold your data.
- Gallery should load as soon as the component mounts - instead you have to click the refresh button to get the images.
- Gestures! I am aware based on what I learned I can add different gesture type components that listen for a swipe or tap etc. Would improve the app a lot by making your different touches responsive.
-  Performance. Image sizes are captured small - file size is larger than expected. Could implement React Navigation a bit better that includes the login screen. Currently only has 2 screens. Home(Gallery) & Capture(Camera)
- When you go to type in credentials at login the password box is hidden due to overlapping keyboard. Can fix this with styling.
- Reponsive buttons - They don't quite have that Clicked feel. There are certain components that give that effect I believe like Pressable.
- Ensure the app works on IOS. I don't currently have an Iphone and was only using my actual device for testing.
- Functionality to login screen buttons like Remember Me / Forgot Password. Adding a register here button etc.
- Loading screens.

## Author

👤 **Tim Jackson**

- Github: [@timjacksonm](https://github.com/timjacksonm)
- Twitter [@timjacksonm](https://twitter.com/timjacksonm)
- LinkedIn [@timjacksonm](https://linkedin.com/in/timjacksonm)

## License

<p>
  <a href="https://choosealicense.com/licenses/mit/">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
</p>
