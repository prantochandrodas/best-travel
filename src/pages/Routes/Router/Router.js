import About from "../../About/About";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import Signin from "../../Signin/Signin";
import PriveteRoute from "../PriveteRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Main/Main");

export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<Signin></Signin>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/about',
                element:<PriveteRoute>
                    <About></About>
                </PriveteRoute>
            }
        ]
    }
])