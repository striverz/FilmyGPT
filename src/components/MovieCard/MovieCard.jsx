import React from 'react'
import "./MovieCard.css"
import {MOVIE_IMG_CDN} from "../../utils/constants"


const MovieCard = ({poster}) => {
  return (
    <div className='movie-card'>
        <img src={MOVIE_IMG_CDN+poster} className='movie-card-img'></img>
    </div>
  )
}

export default MovieCard