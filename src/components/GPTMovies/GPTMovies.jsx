import React from 'react'
import "./GPTMovies.css"
import MoviesList from '../MoviesList/MoviesList'
import { useSelector } from 'react-redux';

const GPTMovies = () => {
  const movies=useSelector(store=>store.movies);
  return (
    <div className='gpt-movies'>
      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MoviesList title={"Top Rated "} movies={movies.topRatedMovies}/>
      <MoviesList title={"Up Coming"} movies={movies.upComingMovies}/>
      <MoviesList title={"Popular Movies"} movies={movies.popularMovies}/>
    </div>
  )
}

export default GPTMovies