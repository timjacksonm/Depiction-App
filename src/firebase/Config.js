import * as firebase from 'firebase';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBCFUm5qxFX0xBSjJzZ1RPj1bb7aAT3Oos',
  authDomain: 'depiction-51b60.firebaseapp.com',
  projectId: 'depiction-51b60',
  storageBucket: 'depiction-51b60.appspot.com',
  messagingSenderId: '1015261636047',
  appId: '1:1015261636047:web:385969c00cefcb260a5eba',
  measurementId: 'G-293FMWBHP6',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
