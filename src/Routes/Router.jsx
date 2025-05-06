import { createBrowserRouter } from "react-router";
import HomeLayout from "../LayOuts/HomeLayout";
import Home from "../Components/Home";
import AuthLayOut from "../LayOuts/AuthLayOut";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Loading from "../Components/Loading";
import CategoryDetails from "../Components/CategoryDetails";
import Subscription from "../Components/Subscription";
import PrivateRoutes from "../Provider/PrivateRoutes";
import DashBoard from "../Pages/DashBoard";
import EditUser from "../Components/EditUser";
import ErrorPage from "../Pages/ErrorPage";
import SubscriberCircle from "../Pages/SubscriberCircle";
import ForgatePassword from "../Pages/ForgatePassword";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch("/subscription.json"),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/dashboard",
                loader: () => fetch("/subscription.json"),
                hydrateFallbackElement: <Loading></Loading>,
                element: <PrivateRoutes>
                    <DashBoard></DashBoard>
                </PrivateRoutes>,
            },
            {
                path: "category/:id",
                element: <CategoryDetails></CategoryDetails>,
                loader: () => fetch("/subscription.json"),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "subscription/:cat_id/:product_id",
                element: (
                    <PrivateRoutes>
                        <Subscription></Subscription>
                    </PrivateRoutes>
                ),
                loader: () => fetch("/subscription.json"),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/edit_user_details",
                element: <PrivateRoutes>
                    <EditUser></EditUser>
                </PrivateRoutes>
            }, 
            {
                path: "/subscriber/circle",
                loader: () => fetch('/blog.json'),
                hydrateFallbackElement: <Loading></Loading>,
                element: <PrivateRoutes>
                    <SubscriberCircle></SubscriberCircle>
                </PrivateRoutes>
            },
            {
                path: "/reset_password",
                element: <ForgatePassword></ForgatePassword>
            }
        ],
    },

    {
        path: "/auth",
        element: <AuthLayOut></AuthLayOut>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    }
]);
