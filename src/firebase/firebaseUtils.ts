import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDW4SBsgCF7u9OG_cw8NXpHS5INGD5cypw",
  authDomain: "e-commerce-46618.firebaseapp.com",
  projectId: "e-commerce-46618",
  storageBucket: "e-commerce-46618.appspot.com",
  messagingSenderId: "895410754756",
  appId: "1:895410754756:web:eb6d6cac3dd5f073a6a591",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider)


export const createUserProfileDocument = async (userAuth: any, additionalData?: any)=>{
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  
  const snapshot = await userRef.get()

  if(!snapshot.exists){
    const {email, displayName} = userAuth
    const createdAt = new Date()
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(err){
      console.log('Error creating user' + err.message)
    }
  }
  return userRef
}

export default firebase