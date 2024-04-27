import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
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
// Logout
const LogOut=()=>{
    setLoading(true);
    return signOut(auth)
}
// onauthstatechange
useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentuser)=>{
        console.log(currentuser)
        setUser(currentuser)
        setLoading(false)
    });
    return ()=>{
        unSubscribe();
    }
},[])

    const authInfo={
        user,
        signUpUser,
        loading,setUser,
        updateUser,
        loginUser,
        googleLogin,
        LogOut


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;