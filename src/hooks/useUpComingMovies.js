import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUpComingMovies } from '../redux/moviesSlice';

const useUpComingMovies = () => {

    const dispatch=useDispatch();

    const getUpComingMoviesData=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
        const json=await data.json();
        
        dispatch(addUpComingMovies(json.results));
    }
    useEffect(()=>{
        getUpComingMoviesData();
    },[])
  return (
    <div>useUpComingMovies</div>
  )
}

export default useUpComingMovies