import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const ForgatePassword = () => {
    const { state } = useLocation();
    const { ResetMail } = useContext(AuthContext);
    const [email, setEmail] = useState(state);

    useEffect(() => {
        document.title = "SubCloud || Reset Password";
    });

    const handleResetPassword = (e) => {
        e.preventDefault();
        ResetMail(email)
            .then(() => {
                toast.success("Reset Password Email Sent Successfully");
                window.location.href = "https://mail.google.com/";
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="min-h-[calc(100vh-435px)] py-10 px-4">
            <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl shadow-2xl bg-gray-100">
                <h1 className="text-2xl font-bold text-center">
                    Reset Your Password
                </h1>
                <form
                    onSubmit={handleResetPassword}
                    noValidate=""
                    action=""
                    className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label
                            htmlFor="email"
                            className="block dark:text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                        />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgatePassword;
