import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { TvShows } from './pages/TvShows/TvShows';
import { Movies } from './pages/Movies/Movies';
import { Genres } from './pages/Genres/Genres';
import { WatchLater } from './pages/WatchLater/WatchLater';

export const RoutesComponent = () => {
	return (
		<Routes>
			<Route path='/home' element={<Home />} />
			<Route path='/tv-shows' element={<TvShows />} />
			<Route path='/movies' element={<Movies />} />
			<Route path='/genres' element={<Genres />} />
			<Route path='/watch-later' element={<WatchLater />} />
			<Route path='/' element={<Home />} />
		</Routes>
	)
}
