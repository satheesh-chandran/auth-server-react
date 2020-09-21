import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/dashboard', text: 'All stories' },
  { path: '/dashboard/myStories', text: 'Your stories' },
  { path: '/dashboard/addStory', text: 'Add story' },
  { path: '/dashboard/myApps', text: 'Your apps' },
  { path: '/dashboard/createApp', text: 'Add app' }
  // { path: '/dashboard/profile', text: 'Your profile' },
  // { path: '/dashboard/followers', text: 'Followers' },
  // { path: '/dashboard/following', text: 'Following' },
  // { path: '/dashboard/findFriends', text: 'Find friends' }
];

const Navbar = function () {
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
