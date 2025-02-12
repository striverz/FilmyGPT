import React, { useState,useRef } from 'react'
import "./Login.css"

import { checkValidation } from '../../utils/validation'

import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addUser} from "../../redux/userSlice";
import Header from '../Header/Header';

const Login = () => {

  const[isLogin,setIsLogin]=useState(1);
  
  const [errorMessage,setErrorMessage]=useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();


  const email=useRef();
  const password=useRef();
  const name=useRef();

  const handleLogin=()=>{
    setIsLogin(!isLogin);
  }

  const handleSignIn=()=>{
    
    
    const message= (isLogin ? checkValidation(email.current.value,password.current.value,"ManiKanta") :checkValidation(email.current.value,password.current.value,name.current.value));
    setErrorMessage(message);
    
    //if still i found any errors in the validation
    if(message) return;


    //signUp and signIn API's for authentication using the firebase

    if(!isLogin){ 
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorMessage=="Firebase: Error (auth/email-already-in-use).") setErrorMessage("Email is already in use.");

        });

    }
    else{ 
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
         
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorMessage=="Firebase: Error (auth/invalid-credential).") setErrorMessage("Invalid credentials.")
          
        });

    }
  }

  return (
    <div className='login-page'>
      <Header/>
      
      <form onSubmit={(e)=>e.preventDefault()} className='login-form' >

        <h1>{isLogin ? "Sign in" : "Sign Up"}</h1>
        {!isLogin && <input  ref={name} type="text" placeholder='Enter Your Name'></input>}

        <input ref={email} type="text" placeholder='Email Address'></input>

        <input ref={password} type='text' placeholder='password'></input>
        {errorMessage && <p className='error-msg'>{errorMessage}</p>}

        <button onClick={handleSignIn}>{isLogin ? "Sign In" :"Sign Up"}</button>
        <p onClick={handleLogin} className='normal-msg'> { isLogin ? "New to Netflix? Sign up now." : "Already have Account? Sign in now"}</p>
      </form>


    </div>
  )
}

export default Login