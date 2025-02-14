import React from 'react'
import "./GPTMovies.css"
import { useSelector } from 'react-redux';
import MoviesList from '../MoviesList/MoviesList';




const GPTMovies = () => {
  const movies=useSelector(store=>store.gpt.gptRecommendedMovies);
  const shimmerUIVal=useSelector(store=>store.gpt.shimmerUI);
 

  const movieNames=movies?.movieNames;
  const moviesInfo=movies?.moviesInfo;
  return (
    <div className='gpt-movies'>
      {movieNames &&
        movieNames.map((movieName,index)=><MoviesList key={index} title={movieName} movies={moviesInfo[index]}/>)
      }
      { shimmerUIVal && <div className='shimmer-ui-section'> 
        <h1>The show will begin shortly..🍿</h1>
        <div className='shimmer-cards'>
            <div className='section'></div>
            <div className='section'></div>
            <div className='section'></div>
            <div className='section'></div>
            <div className='section'></div>
            <div className='section'></div>
        </div>
      </div>}
     
    </div>
    
  )
}

export default GPTMovies