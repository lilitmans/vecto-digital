import React from 'react';

import './navbarIcon.css';

export const NavbarIcon = ({
  route,
  activeTab,
  menuIsHovered
}) => {
  const defineStyle = (route) => {
    if (activeTab === route && !menuIsHovered ||
      !activeTab && route === 'home') {
      return 'activeTab';
    }
    return '';
  }

  return (
    <div className={`${defineStyle(route.RoutePath)} navbarIcon`}>
      <img src={`${route.Icon}`} alt='Route icon' />
    </div>
  )
}
