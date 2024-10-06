import { createContext, useContext , useEffect , useState} from "react";
import {initializeApp} from 'firebase/app'
import { getFirestore , collection , addDoc , getDocs , getDoc , doc , query , where, queryEqual } from 'firebase/firestore'
import { getStorage , ref , uploadBytes , getDownloadURL } from 'firebase/storage'
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup , GithubAuthProvider , onAuthStateChanged } from 'firebase/auth'

// Create Context
const FirebaseContext = createContext(null);

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCZSN4eLeM9IFGICFd2AyoV9tQZl4R7xuE",
  authDomain: "bookfy-916e4.firebaseapp.com",
  projectId: "bookfy-916e4",
  storageBucket: "bookfy-916e4.appspot.com",
  messagingSenderId: "858685684274",
  appId: "1:858685684274:web:ae716bfd90e03c46429a2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Cloud Firestore 
const firebaseCloudFireStore = getFirestore(app);

// Firebase Storage
const firebaseStorage = getStorage(app);

// Firebase Auth
const firebaseAuth = getAuth(app);

// Google Auth
const googleAuth = new GoogleAuthProvider();

// Github Auth
const githubAuth = new GithubAuthProvider();

// Create Custom Hook
export const useFirebaseContext = () => useContext(FirebaseContext);

// Create Provider
export const FirebaseProvider = (props) => {

    // Track if User Already there
    const [user,setUser] = useState(null);
    
    // useEffect
    useEffect( () => {
        onAuthStateChanged( firebaseAuth , user => {
            if( user ) setUser(user);
            else setUser(null); 
        })
    },[]);

    const isLoggedIn = user ? true : false;

    // SignUp Function
    const signUpWithEmailAndPassword = (email,password) => createUserWithEmailAndPassword( firebaseAuth , email , password );

    // Login Function
    const signInUserWithEmailAndPassword = (email,password) => signInWithEmailAndPassword( firebaseAuth , email , password );

    // Login With Google 
    const loginWithGoogle = () => signInWithPopup(firebaseAuth,googleAuth).then((res) => alert("Login With Google"));

    // Login With Github
    const loginWithGithub = () => signInWithPopup(firebaseAuth,githubAuth).then((res) => alert("Login With Github"));

    // Handle Book Listing
    const handleBooks =  async(title,language,isbn,categories,price,author,coverImg) => {

        // Upload Image
        const imgRef = ref( firebaseStorage , `uploads/images/${Date.now()}-${coverImg.name}`);

        // Img path
        const uploadRes = await uploadBytes(imgRef,coverImg);
    
        // Upload Data
        return await addDoc(collection(firebaseCloudFireStore,'books'),{
            title,
            language,
            isbn,
            categories,
            price,
            author,
            imgURL:uploadRes.ref.fullPath,
            userID:user.uid,
            userEmail:user.email,
            displayName:user.displayName,
            photoURL:user.photoURL,
        });

    };

    // Getting Book Lists
    const getBookList = () => {
        return getDocs(collection(firebaseCloudFireStore,'books'));
    };

    // Getting Image From Storage
    const getImageURL = (path) => {
        return getDownloadURL(ref(firebaseStorage,path));
    };

    // Getting Book Details Using BookID
    const getBookDetails = async (bookID) => {
        const docRef = doc( firebaseCloudFireStore , "books" , bookID );
        const result = await getDoc(docRef);
        return result;
    };

    // Place Book Order
    const placeOrder = async (bookID,qty) => {
        const collectionRef = collection(firebaseCloudFireStore,"books",bookID,"orders");
        const result = await addDoc(collectionRef,{
            userID:user.uid,
            userEmail:user.email,
            displayName:user.displayName,
            photoURL:user.photoURL,
            qty:Number(qty),
        });
        return result;
    };

    // Fetch User Books
    const fetchMyBooks = async (userEmail) => {
        const collectionRef = collection(firebaseCloudFireStore,"books");
        const q = query(collectionRef , where("userEmail",'==',userEmail));
        const result = await getDocs(q);
        return result;
    };

    // Fetch Book Order
    const fetchBookOrders = async (bookID) => {
        const collectionRef = collection( firebaseCloudFireStore , "books" , bookID , "orders");
        const res = await getDocs(collectionRef);
        return res;
    };

    return(
        <FirebaseContext.Provider value={{signUpWithEmailAndPassword,signInUserWithEmailAndPassword,loginWithGoogle,loginWithGithub,isLoggedIn,handleBooks,getBookList,getImageURL,getBookDetails,placeOrder,fetchMyBooks,user,fetchBookOrders}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}