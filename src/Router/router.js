import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";



export const router = createBrowserRouter ([
    {
        path:"/",
        element: <App/>,
        errorElement:<ErrorPage/>,
        children: [
            { index: true, element: <Home />},
            {
                path:"/profile",
                element:<Profile/>,
            },
            {
                path:"/sign-in",
                element:<SignIn/>,
            },
            {
                path:"/sign-up",
                element:<SignUp/>,
            },
        ],
    },
]);
