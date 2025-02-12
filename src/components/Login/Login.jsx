import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"

const Login = () => {
  const[isLogin,setIsLogin]=useState(1);
  const handleLogin=()=>{
    setIsLogin(!isLogin);
  }

  return (
    <div className='login-page'>
      <div className='logo-image'>
        <img src={logo} alt='logo' className='logo'></img>
      </div>
      <form className='login-form'>
        <h1>{isLogin ? "Sign in" : "Sign Up"}</h1>
        {!isLogin && <input type="text" placeholder='Enter Your Name'></input>}
        <input type="text" placeholder='Email Address'></input>
        <input type='password' placeholder='password'></input>
        <button>{isLogin ? "Sign In" :"Sign Up"}</button>
        <p onClick={handleLogin}> { isLogin ? "New to Netflix? Sign up now." : "Already have Account? Sign in now"}</p>
      </form>


    </div>
  )
}

export default Login