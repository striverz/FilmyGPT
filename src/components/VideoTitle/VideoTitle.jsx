import React from 'react'
import "./VideoTitle.css"

const VideoTitle = ({title}) => {
 
  return (
    <div className='video-title'>
      <h2>{title}</h2>
      <div>
        <button>Play</button>
        <button>More Info</button>
      </div>
      

    </div>
  )
}

export default VideoTitle