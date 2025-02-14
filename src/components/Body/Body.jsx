import React, { useEffect } from 'react'
import "./Body.css";
import Browse from '../Browse/Browse';
import Login from "../Login/Login"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import WatchPlayer from '../WatchPlayer/WatchPlayer';
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
        {
            path:"/watch/:movieId",
            element:<WatchPlayer/>
        }
    ]);

    return(<RouterProvider router={appRouter}/>)
   
}
export default Body;