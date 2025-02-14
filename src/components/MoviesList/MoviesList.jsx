import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import "./MoviesList.css"
//20 movies kavali ekkadaki
const MoviesList = ({title,movies}) => {
  return (
    <div className='movie-list'>
       {movies&& <h1>{title}</h1>}
        <div className='movie-card-section'>
            { movies &&
                movies.map((movie)=>{
                    return(
                        <MovieCard  key={movie.id} poster={movie.poster_path} id={movie.id}/>
                    )
                })
            }
            
        </div>

    </div>
  )
}

export default MoviesList