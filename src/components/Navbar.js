import React from 'react';
import { NavLink, useRouteMatch, useHistory } from 'react-router-dom';

const Navbar = function (props) {
  const { url } = useRouteMatch();

  const links = [
    { path: `${url}`, text: 'All stories' },
    { path: `${url}/myStories`, text: 'Your stories' },
    { path: `${url}/addStory`, text: 'Add story' },
    { path: `${url}/myApps`, text: 'Your apps' },
    { path: `${url}/createApp`, text: 'Add app' }
    // { path: `${url}/user/${props.user.id}`, text: 'Your profile' },
    // { path: '/dashboard/followers', text: 'Followers' },
    // { path: '/dashboard/following', text: 'Following' },
    // { path: '/dashboard/findFriends', text: 'Find friends' }
  ];

  const history = useHistory();

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

  const toProfile = () => history.push(`/dashboard/user/${props.user.id}`);

  return (
    <div className='navbar'>
      <p onClick={toProfile}>Hello {props.user.name}</p>
      {navLinks}
    </div>
  );
};

export default Navbar;
