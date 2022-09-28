// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNaipyUbjbHBU36SyFiCYdinNhfsDhHmo",
  authDomain: "crwn-clothing-db-8bba6.firebaseapp.com",
  projectId: "crwn-clothing-db-8bba6",
  storageBucket: "crwn-clothing-db-8bba6.appspot.com",
  messagingSenderId: "471400527846",
  appId: "1:471400527846:web:31bb69b0e6ed8fbb1b4827",
  measurementId: "G-J813KD27YK",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = (): Promise<UserCredential> =>
  signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
      return userDocRef;
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return userDocRef;
};

// Create auth user with email and password
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};
