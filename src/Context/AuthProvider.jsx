import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [subscribed, setSubscribed] = useState([]);
    const provider = new GoogleAuthProvider();

    console.log(user);

    const createUser = (email, password) => {
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
        return signInWithPopup(auth, provider);
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
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>);
};

export default AuthProvider;
