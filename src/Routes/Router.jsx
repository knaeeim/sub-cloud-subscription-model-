import { createBrowserRouter } from "react-router";
import HomeLayout from "../LayOuts/HomeLayout";
import Home from "../Components/Home";
import AuthLayOut from "../LayOuts/AuthLayOut";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Loading from "../Components/Loading";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('/subscription.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/dashboard',
                element: <h1>Welcome to Dashboard</h1>
            }
        ]
    },

    {
        path: '/auth',
        element: <AuthLayOut></AuthLayOut>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    }
])