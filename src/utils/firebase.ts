import firebase from "firebase";

import config from "../config";

const firebaseApp = firebase.initializeApp(config.firebase);

export const auth = firebaseApp.auth();
