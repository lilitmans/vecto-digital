import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { Button } from '../Button/Button';

import './featuredMovie.css';

export const FeaturedMovie = ({
  selectedMovie
}) => {

  if (!selectedMovie) {
    return null
  }

  return (
    <div className='featuredMovie'
      style={{ backgroundImage: `url(${require(`../../assets/FeaturedCoverImage.png`)})` }}>
      <div className='contentNoFitNavbar'>
        <div className='movieInfo'>
          <h3>movie</h3>
          <div className='movieTitle'>
            <img src={require(`../../assets/${selectedMovie.TitleImage}`)} alt='Movie title' />
          </div>
          <div className='moviesOtherDetails'>
            <p className='year'>{selectedMovie.ReleaseYear}</p>
            <p className='ageLimit'>{selectedMovie.MpaRating}</p>
            <p className='duration'>{`${1}h ${48}m`}</p>
          </div>
          <p className='movieDescription'>{selectedMovie.Description}</p>
          <Button />
        </div>
      </div>
      <ReactPlayer
        className='featuredMovieVideo'
        playing={true}
        url={selectedMovie.VideoUrl} />
    </div>
  )
}
