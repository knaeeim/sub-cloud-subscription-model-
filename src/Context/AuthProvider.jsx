import React from "react";
import { AuthContex } from "./AuthContext";

const AuthProvider = ({ children }) => {


    const userInfo = {

    }

    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>);
};

export default AuthProvider;
