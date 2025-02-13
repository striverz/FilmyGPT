import React from 'react'
import "./VideoTitle.css"

const VideoTitle = ({title}) => {
 
  return (
    <div className='video-title'>
      <h1>{title}</h1>
      <div>
        <button>Play</button>
        <button>More Info</button>
      </div>
      

    </div>
  )
}

export default VideoTitle