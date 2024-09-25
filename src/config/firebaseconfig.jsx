import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6RkL8oGBqoCma7izfQzdqmESmMGrMMRQ",
  authDomain: "theblacklistinctalent.firebaseapp.com",
  projectId: "theblacklistinctalent",
  storageBucket: "theblacklistinctalent.appspot.com",
  messagingSenderId: "18848384660",
  appId: "1:18848384660:web:ddf1562a1a8aa00ccd1681",
  measurementId: "G-SXC51Y6VL3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
