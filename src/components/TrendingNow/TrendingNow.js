import React from 'react';
import { MoviesCarousel } from '../../components/MoviesCarousel/MoviesCarousel';

import './trendingNow.css';

export const TrendingNow = ({
  setSelectedMovie
}) => {
  return (
    <div className='trendingNow'>
      <h4 className='title'>Trending Now</h4>
      <MoviesCarousel setSelectedMovie={setSelectedMovie}/>
    </div>
  )
}
