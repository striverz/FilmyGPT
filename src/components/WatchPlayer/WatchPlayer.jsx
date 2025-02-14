import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../Header/Header';
import useWatchPlayerVideo from '../../hooks/useWatchPlayerVideo';
import { useDispatch, useSelector } from 'react-redux';
import "./WatchPlayer.css"
import { removeWatchPlayerVideo } from '../../redux/moviesSlice';


const WatchPlayer = () => {
  const {movieId}=useParams();
  const dispatch=useDispatch();
  useWatchPlayerVideo(movieId);
  const navigate=useNavigate();


  const watchData=useSelector(store=>store.movies. watchPlayerVideo);
  if(!watchData) return;
  console.log(watchData);

  return (
    <div>
      <div className='watch-player-header'>
        <button  onClick={()=>navigate("/browse")} className='wow-btn'>🏠</button>
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