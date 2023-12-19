// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: 'AIzaSyBcQsfNATKNocYCS4Hc7bdZmYJshk_uo1U',
  authDomain: 'posyandu2-893b0.firebaseapp.com',
  projectId: 'posyandu2-893b0',
  storageBucket: 'posyandu2-893b0.appspot.com',
  messagingSenderId: '274637030651',
  appId: '1:274637030651:web:bb961bacad44421f711c5e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app);
