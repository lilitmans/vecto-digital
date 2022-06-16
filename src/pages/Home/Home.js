import React, { useEffect, useState } from 'react';
import { FeaturedMovie } from '../../components/FeaturedMovie/FeaturedMovie';
import { TrendingNow } from '../../components/TrendingNow/TrendingNow';

import './home.css';

export const Home = () => {
	const [selectedMovie, setSelectedMovie] = useState({
		"Id": "1",
		"Title": "Title 1",
		"CoverImage": "https_specials-1.png",
		"TitleImage": "FeaturedTitleImage.png",
		"Date": "2021-10-24T12:16:50.894556",
		"ReleaseYear": "2021",
		"MpaRating": "18+",
		"Category": "Movie",
		"Duration": "2000",
		"VideoUrl": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
		"Description": "Info About it"
	});

	// useEffect(() => {
	// 	const items = JSON.parse(localStorage.getItem('items'));
	// 	if (items) {
	// 		setSelectedMovie(items);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	localStorage.setItem('movie', JSON.stringify(selectedMovie));
	// }, [selectedMovie]);

	return (
		<div className='home page'>
			<div className='content'>
				<FeaturedMovie selectedMovie={selectedMovie} />
			</div>
			<TrendingNow setSelectedMovie={setSelectedMovie} />
		</div>
	)
}
