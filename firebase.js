import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA6mlBm4Yvr5RAqwvepCBs1Twu-NbIgXkw",
    authDomain: "amzn-9b8e3.firebaseapp.com",
    projectId: "amzn-9b8e3",
    storageBucket: "amzn-9b8e3.appspot.com",
    messagingSenderId: "754719722800",
    appId: "1:754719722800:web:fb4c34f9cc44275a9e0cf5"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db; 