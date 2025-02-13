import React from 'react'
import "./PrimaryBrowse.css"
import VideoTitle from '../VideoTitle/VideoTitle'
import VideoBackground from '../VideoBackground/VideoBackground'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../../hooks/useMovieTrailer'

const PrimaryBrowse = () => {

  const movieData=useSelector(store=>store.movies.nowPlayingMovies);
  if(!movieData) return; //return for Initial rendering

  const {original_title,id}=movieData[0];
 

 
  return (
    <div>
        <VideoTitle title={original_title}/>
        <VideoBackground id={id}/>
    </div>
  )
}

export default PrimaryBrowse