import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addMovieTrailer } from '../redux/moviesSlice';

const useMovieTrailer = (id) => {
    
    const dispatch=useDispatch();
    

    const getMovieTrailerData=async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,API_OPTIONS);
        const json=await data.json();
        const Data=json.results;
        if(!Data) return;
        const trailerVideo = Data.filter((res) => res.type === 'Trailer');
        const trailer= trailerVideo.length ? trailerVideo[0] : json?.results[0];
        dispatch(addMovieTrailer(trailer));

   
    }

    useEffect(()=>{
        getMovieTrailerData();
    },[]);
  return (
    <div>useMovieTrailer</div>
  )
}

export default useMovieTrailer