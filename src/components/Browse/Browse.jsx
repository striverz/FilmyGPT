import React from 'react'
import "./Browse.css"
import Header from '../Header/Header'
import PrimaryBrowse from '../PrimaryBrowse/PrimaryBrowse'
import SecondaryBrowse from '../SecondaryBrowse/SecondaryBrowse'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import usePopularMovies from '../../hooks/usePopularMovies'
import useTopRatedMovies from '../../hooks/useTopRatedMovies'
import useUpComingMovies from '../../hooks/useUpComingMovies'
import GPTSearchPlayground from '../GPTSearchPlayground/GPTSearchPlayground'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from "react-router-dom";
import { removeWatchPlayerVideo } from '../../redux/moviesSlice'


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  

  const gptView=useSelector(store=>store.gpt.toogleGPTSearch);

  return (
    <div className='browse'>
      <Header/>
      
     {
     gptView ?  <GPTSearchPlayground/> :
     <>
     <PrimaryBrowse/>
     <SecondaryBrowse/>
     </>
     }
      
      
    </div>
  )
}

export default Browse