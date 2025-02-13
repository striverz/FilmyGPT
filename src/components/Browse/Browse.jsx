import React from 'react'
import "./Browse.css"
import Header from '../Header/Header'
import PrimaryBrowse from '../PrimaryBrowse/PrimaryBrowse'
import SecondaryBrowse from '../SecondaryBrowse/SecondaryBrowse'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import usePopularMovies from '../../hooks/usePopularMovies'
import useTopRatedMovies from '../../hooks/useTopRatedMovies'
import useUpComingMovies from '../../hooks/useUpComingMovies'

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div className='browse'>
      <Header/>
      <PrimaryBrowse/>
      <SecondaryBrowse/>
    </div>
  )
}

export default Browse