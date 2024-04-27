import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";


export const AuthContext=createContext(null);
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const signUpUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // Updateuser
    const updateUser=(name,image)=>{
        return updateProfile(auth.currentuser,{
            displayName:name,
            photoURL:image
        })
    }
    // loginuser
    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
// googole login
const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

    const authInfo={
        user,
        signUpUser,
        loading,setUser,
        updateUser,
        loginUser,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;