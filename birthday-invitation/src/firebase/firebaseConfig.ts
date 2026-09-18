import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBg0gUGzX-0IUUn8364eEx_Cx5_8Jm5pTc",
  authDomain: "darian-s-first-birthday.firebaseapp.com",
  projectId: "darian-s-first-birthday",
  storageBucket: "darian-s-first-birthday.firebasestorage.app",
  messagingSenderId: "322724145028",
  appId: "1:322724145028:web:3267a1725a2095a0051fd1"
};

// Prevent duplicate initialization if hot-reloaded
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export const storage = getStorage(app);