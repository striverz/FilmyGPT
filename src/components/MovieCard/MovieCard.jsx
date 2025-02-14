import React from 'react'
import "./MovieCard.css"
import {MOVIE_IMG_CDN} from "../../utils/constants"
import { useNavigate } from 'react-router-dom';


const MovieCard = ({poster,id}) => {


  const navigate=useNavigate();

  const handleMovieCard=()=>{
    navigate(`/watch/${id}`);

  }
  return (
    <div className='movie-card'>
      {poster&& <img onClick={handleMovieCard} src={MOVIE_IMG_CDN+poster} className='movie-card-img'></img>}
    </div>
  )
}

export default MovieCard