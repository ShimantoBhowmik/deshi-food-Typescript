
import { initializeApp } from 'firebase/app';
import{ getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged, User, NextOrObserver } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, QueryDocumentSnapshot} from 'firebase/firestore';
import { Category } from '../../store/categories/category-types';

const firebaseConfig = {
  apiKey: "AIzaSyAmVe9WU019A6hPOy4HoWw-9B2QFzOOjRQ",
  authDomain: "deshi-fooddb.firebaseapp.com",
  projectId: "deshi-fooddb",
  storageBucket: "deshi-fooddb.appspot.com",
  messagingSenderId: "94392679690",
  appId: "1:94392679690:web:8e65239da2ecdf5fd68ef3"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const dbase = getFirestore();

export type ObjectToAdd = {
  title: string;
}

export const addCollectionAndDocuments = async<E extends ObjectToAdd> (collectionKey: string, objectsToAdd: E[]): Promise<void> =>{
   const collectionRef = collection(dbase, collectionKey);
   const batch = writeBatch(dbase);

   objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
   });

   await batch.commit();
}

export const getCollectionAndDocuments = async(): Promise<Category[]> => {
  const collectionRef = collection(dbase, 'categories');
  const qr = query(collectionRef);



  const querySnapshot = await getDocs(qr);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
  
  
}
export type AddInfo = {
  displayName?: string;
}

export type UserData = {
  created: Date;
  displayName: string;
  email: string;
}

export const createUserDoc = async(userAuth: User, addInfo ={} as AddInfo ): Promise< void | QueryDocumentSnapshot<UserData> > => {
  if(!userAuth) return;

  const userDocRef = doc(dbase, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(userSnapshot.exists() === false){
    const { displayName, email} = userAuth;
    const created = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        created,
        ...addInfo,
      });
    }catch(err){
      console.log( "Error creating user account", console.log(err));
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export const createUserEmailPassword = async(email: string, password: string) =>{
  if(!email  || !password ) return;

  return createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserEmailPassword = async(email: string, password : string) =>{
  if(!email  || !password ) return;

  return signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const Listener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);


export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};