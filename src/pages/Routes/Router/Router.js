import About from "../../About/About";
import AllPackages from "../../AllPackages/AllPackages";
import Bookings from "../../Bookings/Bookings";
import CountryDetails from "../../CountryDetails/CountryDetails";
import Home from "../../Home/Home/Home";
import HomeBanners from "../../Home/HomeBanner/HomeBanners";
import Login from "../../Login/Login";
import Package from "../../Package/Package";
import PackageDetails from "../../PackageDetails/PackageDetails";
import Packages from "../../Packages/Packages";
import PlaceAndThingsToDo from "../../PlaceAndThingsToDo/PlaceAndThingsToDo";
import SerchPackage from "../../SerchPackage/SerchPackage";
import Signin from "../../Signin/Signin";
import Spinner from "../../Spinner/Spinner";
import ThingsTodo from "../../ThingsTodo/ThingsTodo";
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
                element:<About></About>
            },
            {
                path:'/thing',
                element:<Packages></Packages>
            },
            {
                path:'/countryDetails',
                element:<CountryDetails></CountryDetails>
            },
            {
                path:'/packageDetails',
                element:<PriveteRoute><PackageDetails></PackageDetails></PriveteRoute>
            },
            {
                path:'/allPackage',
                element:<AllPackages></AllPackages>
            },
            {
                path:'/booking',
                element:<PriveteRoute><Bookings></Bookings></PriveteRoute>
            },
            {
                 path:'/serch',
                 element:<SerchPackage></SerchPackage>
            },
        ]
    }
])