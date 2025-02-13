import React from 'react'
import "./VideoBackground.css"
import useMovieTrailer from '../../hooks/useMovieTrailer'

const VideoBackground = ({id}) => {
  useMovieTrailer(id);
  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground