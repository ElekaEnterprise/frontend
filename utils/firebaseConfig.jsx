import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB2EI8POVjLXy18l_QH93YZ00wJC5iAx18",
  authDomain: "eleka-backend.firebaseapp.com",
  projectId: "eleka-backend",
  storageBucket: "eleka-backend.firebasestorage.app",
  messagingSenderId: "187961153813",
  appId: "1:187961153813:web:20b12d1a3b588f2ab5311c",
  measurementId: "G-6GT4VWMEW0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth };