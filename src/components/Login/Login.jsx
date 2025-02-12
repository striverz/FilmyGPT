import React, { useState,useRef } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
import { checkValidation } from '../../utils/validation'

const Login = () => {

  const[isLogin,setIsLogin]=useState(1);
  
  const [errorMessage,setErrorMessage]=useState(null);


  const email=useRef();
  const password=useRef();
  const name=useRef();

  const handleLogin=()=>{
    setIsLogin(!isLogin);
  }

  const handleSignIn=()=>{
    
    
    const message= (isLogin ? checkValidation(email.current.value,password.current.value,"ManiKanta") :checkValidation(email.current.value,password.current.value,name.current.value));
    setErrorMessage(message);

    if(message==null){
      console.log("form is valid");
    }
  }

  return (
    <div className='login-page'>
      <div className='logo-image'>
        <img src={logo} alt='logo' className='logo'></img>
      </div>
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