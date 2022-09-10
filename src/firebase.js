import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };
const firebaseConfig = {
  apiKey: "AIzaSyA-2aQ6P4JcEm3uh6JXRQ_CsMHETx6u-so",
  authDomain: "disney-plus-clone-by-harsh.firebaseapp.com",
  projectId: "disney-plus-clone-by-harsh",
  storageBucket: "disney-plus-clone-by-harsh.appspot.com",
  messagingSenderId: "482823105978",
  appId: "1:482823105978:web:b8c6641350e4a5790dc183",
  measurementId: "G-SVCY9SPB0M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;