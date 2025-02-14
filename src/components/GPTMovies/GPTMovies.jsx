import React from 'react'
import "./GPTMovies.css"
import { useSelector } from 'react-redux';
import MoviesList from '../MoviesList/MoviesList';

const GPTMovies = () => {
  const movies=useSelector(store=>store.gpt.gptRecommendedMovies);

  const movieNames=movies?.movieNames;
  const moviesInfo=movies?.moviesInfo;
  return (
    <div className='gpt-movies'>
      {movieNames &&
        movieNames.map((movieName,index)=><MoviesList key={index} title={movieName} movies={moviesInfo[index]}/>)
      }
 
    </div>
  )
}

export default GPTMovies