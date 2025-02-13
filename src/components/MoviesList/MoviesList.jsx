import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import "./MoviesList.css"
const MoviesList = ({title,movies}) => {
  return (
    <div className='movie-list'>
        <h1>{title}</h1>
        <div className='movie-card-section'>
            { movies &&
                movies.map((movie)=>{
                    return(
                        <MovieCard  key={movie.id} poster={movie.poster_path}/>
                    )
                })
            }
            
        </div>

    </div>
  )
}

export default MoviesList