import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../redux/moviesSlice';

const useTopRatedMovies = () => {

    const dispatch=useDispatch();

    const getTopRatedMoviesData=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
        const json=await data.json();
        dispatch(addTopRatedMovies(json.results));

    }

    useEffect(()=>{
        getTopRatedMoviesData();

    },[]);
  return (
    <div>useTopRatedMovies</div>
  )
}

export default useTopRatedMovies