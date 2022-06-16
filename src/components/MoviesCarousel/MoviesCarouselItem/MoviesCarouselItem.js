import React from 'react';

import './moviesCarouselItem.css';

export const MoviesCarouselItem = ({
  movie,
  setSelectedMovie
}) => {

  return (
    <div className='moviesCarouselItem'
      onClick={() => setSelectedMovie(movie)}>
      <img src={require(`./../../../assets/${movie.CoverImage}`)} alt='Movie image' />
    </div>
  )
}
