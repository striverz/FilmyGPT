import React, { useEffect } from 'react'
import {API_OPTIONS} from "../utils/constants"
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../redux/moviesSlice';

const useNowPlayingMovies = () => {

  const dispatch=useDispatch();

    const getNowPlayingMoviesData = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json?.results));
        
    }
    useEffect(()=>{
        getNowPlayingMoviesData();
    },[]);
  return (
    <div>nowPlayingMovies</div>
  )
}

export default useNowPlayingMovies;