import React from 'react'
import "./SecondaryBrowse.css"
import MoviesList from '../MoviesList/MoviesList'
import { useSelector } from 'react-redux'

const SecondaryBrowse = () => {

  const movies=useSelector(store=>store.movies);
  return (
    <div className='secondary-browse'>
      <MoviesList title={""} movies={movies.nowPlayingMovies}/>
      <MoviesList title={"Top Rated "} movies={movies.topRatedMovies}/>
      <MoviesList title={"Up Coming"} movies={movies.upComingMovies}/>
      <MoviesList title={"Popular Movies"} movies={movies.popularMovies}/>
      
      
    </div>
  )
}

export default SecondaryBrowse