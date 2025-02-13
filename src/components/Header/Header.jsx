import React, { useEffect } from 'react'
import "./Header.css"
import profile from "../../assets/profile.jpg"
import { useNavigate } from 'react-router-dom'
import {signOut } from "firebase/auth";
import {auth} from "../../utils/firebase";
import logo from "../../assets/logo.png"
import { useDispatch, useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../../redux/userSlice';





const Header = () => {
    const navigate=useNavigate();

    const userFound=useSelector(store=>store.user);
   

    const dispatch=useDispatch();

    const handleSignoutAuth=()=>{
      
        signOut(auth).then(() => {
          const confirmLogout = window.confirm("Are you sure you want to logout?");
            
            
          }).catch((error) => {
            
          });
        
    }
    

        useEffect(()=>{
          const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {  
              const {uid:uid,email:email} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email}));
              navigate("/browse");

            } else {
              dispatch(removeUser());
              navigate("/");
             
            }
          });

          return ()=>unsubscribe();

        },[]);
        

    return (
    <div className='browse-header'>
     {!userFound && <div className='logo-image'><img src={logo} alt='logo' className='logo'></img></div>}
     {userFound && <div className='profile-img'>
      <button className='gpt-search-btn'>GPT Search</button>
      <img onClick={handleSignoutAuth}src={profile} className='profile-icon'  alt='profile-icon'></img>
      </div>}
    </div>
  )
}

export default Header;