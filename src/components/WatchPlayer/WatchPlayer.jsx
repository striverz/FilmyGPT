import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../Header/Header';
import useWatchPlayerVideo from '../../hooks/useWatchPlayerVideo';
import { useDispatch, useSelector } from 'react-redux';
import "./WatchPlayer.css"
import { removeWatchPlayerVideo } from '../../redux/moviesSlice';
import { useState } from 'react';
import logo from '../../assets/logo.png'
import { IoSunny } from "react-icons/io5";


const WatchPlayer = () => {
  const {movieId}=useParams();
  const dispatch=useDispatch();
  useWatchPlayerVideo(movieId);
  const navigate=useNavigate();

  const [isDarkMode,setIsDarkMode]=useState(false);
  const handleDarkMode=()=>{
    setIsDarkMode(!isDarkMode);
  }



  const watchData=useSelector(store=>store.movies. watchPlayerVideo);
  if(!watchData) return;

  return (
    <div className={isDarkMode ? 'watch-player-component-white' : 'watch-player-component-black'}>
      <div className='watch-player-header'>
        <img src={logo} className='logo'></img>
        <div>
        <button  onClick={handleDarkMode} className='wow-btn'>{isDarkMode ? "☀️" : "🌙"}</button>
        <button  onClick={()=>navigate("/browse")} className='wow-btn'>🏠</button>
        </div>
       
      </div>

      <div className='watch-player-section'>
      <iframe
          className="watch-player"
          src={`https://www.youtube.com/embed/${watchData.key}?autoplay=1&controls=0&loop=1&playlist=${watchData.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
       ></iframe>

      </div>
 
    </div>
  )
}

export default WatchPlayer