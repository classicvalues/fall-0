import firebase  from 'firebase/app';
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKF-6J5VE_Ai3X34GSyxLVyIq_DIdALpk",
  authDomain: "clean-and-no-debt.firebaseapp.com",
  projectId: "clean-and-no-debt",
  storageBucket: "clean-and-no-debt.appspot.com",
  messagingSenderId: "871200427611",
  appId: "1:871200427611:web:3c391571d54a29ffb0b97e",
  measurementId: "G-ZSL70MJJK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

    // [START firebase_secondary]
    // Initialize another app with a different config
    const secondaryApp = firebase.initializeApp(secondaryAppConfig, "secondary");
    // Access services, such as the Realtime Database
    // secondaryApp.database();
    // [END firebase_secondary]

function defaultInitOptions() {
    const firebaseConfig = {
        // ...
    };

    // [START app_default_init_options]
    // Initialize Firebase with a "default" Firebase project
    const defaultProject = firebase.initializeApp(firebaseConfig);

    console.log(defaultProject.name);  // "[DEFAULT]"
}

function multiProjectInitOptions() {
    const firebaseConfig = {
        // ...
    };

    const otherProjectFirebaseConfig = {
        // ...
    };

    // [START app_multi_project_init_options]
    // Initialize Firebase with a default Firebase project
    firebase.initializeApp(firebaseConfig);

    // Initialize Firebase with a second Firebase project
    const otherProject = firebase.initializeApp(otherProjectFirebaseConfig, "other");

    console.log(firebase.app().name);  // "[DEFAULT]"
    console.log(otherProject.name);    // "otherProject"

}