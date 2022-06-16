import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { NavbarItem } from './NavbarItem/NavbarItem';
import userImage from '../../assets/user.png';

import './navbar.css';

export const Navbar = () => {
	const [menuIsHovered, setMenuIsHovered] = useState(false);
	const location = useLocation();

	return (
		<div className={menuIsHovered ? 'navContainer' : ''}>
			<nav
				onMouseEnter={() => setMenuIsHovered(!menuIsHovered)}
				onMouseLeave={() => setMenuIsHovered(!menuIsHovered)}>
				<div
					className='loggedUserInfoContainer'
					style={menuIsHovered ? { visibility: 'visible' } : { visibility: 'hidden' }}>
					<div className='imageContainer'>
						<img src={userImage} alt='User Image' />
					</div>
					<p>Sarah</p>
				</div>
				<ul>
					{
						routes.map((route) => (
							<NavbarItem
								key={`${route.Id}`}
								menuIsHovered={menuIsHovered}
								activeTab={location.pathname.split('/')[1]}
								route={route} />
						))
					}
				</ul>
				<ul>
					<li className={menuIsHovered ? `navbarSubItem visible` : `navbarSubItem`}>
						<Link to=''>Language</Link>
					</li>
					<li className={menuIsHovered ? `navbarSubItem visible` : `navbarSubItem`}>
						<Link to=''>Get help</Link>
					</li>
					<li className={menuIsHovered ? `navbarSubItem visible` : `navbarSubItem`}>
						<Link to=''>Exit</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
