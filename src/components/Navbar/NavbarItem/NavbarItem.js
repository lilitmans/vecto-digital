import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarIcon } from '../NavbarIcon/NavbarIcon';

import './navbarItem.css';

export const NavbarItem = ({
  route,
  activeTab,
  menuIsHovered
}) => {

  const defineStyle = (route) => {
    if (activeTab !== route && menuIsHovered) {
      return 'navbarItem hoveredMenuItem';
    } else if (activeTab === route && menuIsHovered) {
      return 'navbarItem activeHoveredMenuItem'
    }
    return '';
  }

  return (
    <>
      <li className={`${defineStyle(route.RoutePath)} navbarItem`}>
        <Link to={`/${route.RoutePath}`}>
          <NavbarIcon
            route={route}
            activeTab={activeTab}
            menuIsHovered={menuIsHovered} />
          <p>{route.Title}</p>
        </Link>
      </li>
    </>
  )
}
