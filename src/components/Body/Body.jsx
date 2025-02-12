import React, { useEffect } from 'react'
import "./Body.css";
import Browse from '../Browse/Browse';
import Login from "../Login/Login"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {getAdditionalUserInfo, onAuthStateChanged } from "firebase/auth";
import {auth} from "../../utils/firebase"
import { useDispatch } from 'react-redux';
import {addUser} from "../../redux/userSlice"
const Body = () => {

    const dispatch=useDispatch();

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

    return(
        <RouterProvider router={appRouter}/>
        
    )
}

export default Body;