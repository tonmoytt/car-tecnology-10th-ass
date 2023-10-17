import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithCustomToken, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.confid";

export const AuthProvider=createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const Provider = ({children}) => {
    const [user,setUser]=useState();
    const [loder,setloder]=useState(true)

    const CreateUser=(email,password)=>{
        setloder(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const LoginUser=(email,password)=>{
        setloder(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

const GoogleProvider=()=>{
    return signInWithPopup(auth,provider)
}

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            setUser(currentUser);
        });
        return unsubscribe()
    }, [])

    const AuthInfo={user,loder,CreateUser,LoginUser,GoogleProvider}
    return (
        <div>
            <AuthProvider.Provider value={AuthInfo}>
            {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default Provider;