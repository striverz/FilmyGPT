import React from 'react'
import "./VideoTitle.css"
import { useNavigate } from 'react-router-dom'

const VideoTitle = ({title,id}) => {
  const navigate=useNavigate();
 
  return (
    <div className='video-title'>
      <h2>{title}</h2>
      <div>
        <button onClick={()=>navigate(`/watch/${id}`)}>Play</button>
        <button>More Info</button>
      </div>
      

    </div>
  )
}

export default VideoTitle