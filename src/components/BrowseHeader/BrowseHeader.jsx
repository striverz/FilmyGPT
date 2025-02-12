import React from 'react'
import "./BrowseHeader.css"
import profile from "../../assets/profile.jpg"
import { useNavigate } from 'react-router-dom'

import {signOut } from "firebase/auth";
import {auth} from "../../utils/firebase";




const BrowseHeader = () => {
    const navigate=useNavigate();

    const handleSignoutAuth=()=>{
        signOut(auth).then(() => {
            const confirmLogout = window.confirm("Are you sure you want to logout?");
            if(confirmLogout) navigate("/");
          }).catch((error) => {
            
          });
        
    }
    return (
    <div className='browse-header'>
        <img onClick={handleSignoutAuth}src={profile} className='profile-img' alt='profile-icon'></img>
    </div>
  )
}

export default BrowseHeader