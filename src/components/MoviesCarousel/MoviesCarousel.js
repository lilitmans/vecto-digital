import React, { useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";
import data from '../../data.json';
import { MoviesCarouselItem } from './MoviesCarouselItem/MoviesCarouselItem';

import './moviesCarousel.css';

export const MoviesCarousel = ({
  setSelectedMovie
}) => {
  const moviesCarouselContainer = useRef(null);
  const { events } = useDraggable(moviesCarouselContainer);
  const trendingNowData = data.TendingNow;
  const sortedTrendingNowData = trendingNowData.sort((a, b) => {
    return new Date(b.Date) - new Date(a.Date);
  });

  return (
    <div
      ref={moviesCarouselContainer}
      {...events}
      className='moviesCarouselContainer'>
      <div className='moviesCarousel'>
        {
          sortedTrendingNowData.map((movie) => (
            <MoviesCarouselItem
              key={movie.Id}
              movie={movie}
              setSelectedMovie={setSelectedMovie}
            />
          ))
        }
      </div>
    </div>
  )
}
