import React from 'react'
import "./GPTSearchPlayground.css"
import GPTSearch from '../GPTSearch/GPTSearch'
import GPTMovies from '../GPTMovies/GPTMovies'


const GPTSearchPlayground = () => {
  return (
    <div className='gpt-search-ground'>
        <GPTSearch/>
        <GPTMovies/>
        
    </div>
  )
}

export default GPTSearchPlayground