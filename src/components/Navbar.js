import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const Navbar = function () {
  const { url } = useRouteMatch();

  const links = [
    { path: `${url}`, text: 'All stories' },
    { path: `${url}/myStories`, text: 'Your stories' },
    { path: `${url}/addStory`, text: 'Add story' },
    { path: `${url}/myApps`, text: 'Your apps' },
    { path: `${url}/createApp`, text: 'Add app' }
    // { path: '/dashboard/profile', text: 'Your profile' },
    // { path: '/dashboard/followers', text: 'Followers' },
    // { path: '/dashboard/following', text: 'Following' },
    // { path: '/dashboard/findFriends', text: 'Find friends' }
  ];

  const navLinks = links.map((link, index) => (
    <NavLink
      to={link.path}
      activeClassName='activeLink'
      exact
      key={`navLink_${index}`}
    >
      {link.text}
    </NavLink>
  ));

  return <div className='navbar'>{navLinks}</div>;
};

export default Navbar;
