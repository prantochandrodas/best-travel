import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';


export const AuthContext=createContext();
const auth =getAuth(app);
const AuthProvider = ({children}) => {
    const [user,SetUser]=useState(null);
    const [loading,setLoading]=useState(true);
    //    signUp 
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //   login 
    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    //logout 
    const logOut=()=>{
        setLoading(true);
        signOut(auth);
    }
    // update user
    const userUpdata=(displayName,photoURL)=>{
        setLoading(true);
        updateProfile(auth.currentUser,displayName,photoURL)
    }
    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
            SetUser(currentUser);
            setLoading(false);
        })
        return ()=>unSubscribe();
    },[])
    const authInfo={
        createUser,
        loginUser,
        user,
        logOut,
        loading,
        userUpdata
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;