import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const EditUser = () => {
    const { user, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("")

    useEffect(() => {
        if(user){
            setName(user?.displayName || "")
            setPhotoURL(user?.photoURL || " ")
        }
    }, [user])

    const handleEditInfo = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        const userInfo = {
            displayName: name,
            photoURL: photoURL,
        };

        updateUserProfile(userInfo)
            .then(() => {
                setUser((prev) => ({
                    ...prev,
                    displayName: name,
                    photoURL: photoURL,
                }));
                toast.success("Profile updated successfully");
                navigate("/dashboard");
            })
            .catct((error) => {
                toast.error(error.message);
            });
    };
    return (
        <div className="py-10">
            <div className="w-5/12 mx-auto min-h-[calc(100vh-600px)] bg-gray-100 px-10 py-10 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center">Update User Details..</h1>
                <form
                    onSubmit={handleEditInfo}
                    noValidate=""
                    action=""
                    className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label
                            htmlFor="name"
                            className="block dark:text-gray-600">
                            Name
                        </label>
                        <input
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label
                            htmlFor="photoURL"
                            className="block dark:text-gray-600">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            id="photoURL"
                            placeholder="Photo URL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                        />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
