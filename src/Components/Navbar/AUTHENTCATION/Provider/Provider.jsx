import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.confid";

export const AuthProvider=createContext(null)
const auth = getAuth(app);
const Provider = ({children}) => {
    const [user,setUser]=useState();

    const CreateUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const AuthInfo={user,CreateUser}
    return (
        <div>
            <AuthProvider.Provider value={AuthInfo}>
            {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default Provider;