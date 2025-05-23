import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [subscribed, setSubscribed] = useState([]);
    const provider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    const updateUserProfile = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const GoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    } 

    const ResetMail =(email) => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsbscribe();
        }
    },[])

    const userInfo = {
        user, 
        setUser, 
        loading, 
        setLoading,
        createUser,
        logout,
        login,
        updateUserProfile,
        subscribed,
        setSubscribed,
        GoogleSignIn,
        ResetMail
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>);
};

export default AuthProvider;
