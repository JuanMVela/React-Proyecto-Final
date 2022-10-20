import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const FirebaseConfig = {
  
  apiKey: "AIzaSyAYeaSA_wx0i---eNzmGFWMDoh-vGaeDTQ",
  authDomain: "e-valorant-caa0c.firebaseapp.com",
  projectId: "e-valorant-caa0c",
  storageBucket: "e-valorant-caa0c.appspot.com",
  messagingSenderId: "458329393504",
  appId: "1:458329393504:web:9faacbde2987fc22647605"
};

const app = initializeApp (FirebaseConfig);


export const db = getFirestore(app);