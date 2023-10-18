import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithCustomToken, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.confid";

export const AuthProvider = createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loder, setloder] = useState(true)

    const CreateUser = (email, password) => {
        setloder(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser = (email, password) => {
        setloder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleProvider = () => {
        setloder(true)
        return signInWithPopup(auth, provider)
    }
    const SignOut=()=>{
        setloder(true)
        return signOut(auth)
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         console.log('current user', currentUser);
    //         setUser(currentUser);
    //     });
    //     return unsubscribe()
    // }, [])

    useEffect(() => {
       const unsubscribe= onAuthStateChanged(auth, currentUser => {
            console.log('current', currentUser);
            setUser(currentUser)
            setloder(false)
        })
        return () =>{
            unsubscribe
        }
    }, [])

    const AuthInfo = { user, loder, CreateUser, LoginUser, GoogleProvider,SignOut }
    return (
        <div>
            <AuthProvider.Provider value={AuthInfo}>
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default Provider;