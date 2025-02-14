import React from 'react'
import { useDispatch } from 'react-redux';
import { addWatchPlayerVideo } from '../redux/moviesSlice';
import {API_OPTIONS} from "../utils/constants"
import { useEffect } from 'react';

const useWatchPlayerVideo = (id) => {

    const dispatch=useDispatch();
    

    const getWatchPlayerData=async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,API_OPTIONS);
        const json=await data.json();
        const Data=json.results;
        if(!Data) return;
        const trailerVideo = Data.filter((res) => res.type === 'Trailer');
        const trailer= trailerVideo.length ? trailerVideo[0] : json?.results[0];
        dispatch(addWatchPlayerVideo(trailer));
    }

    useEffect(()=>{
        getWatchPlayerData();
    },[]);

  return (
    <div>useWatchPlayerVideo</div>
  )
}

export default useWatchPlayerVideo;