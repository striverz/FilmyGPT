import React from 'react'
import "./Body.css";
import Browse from '../Browse/Browse';
import Login from "../Login/Login"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const Body = () => {

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