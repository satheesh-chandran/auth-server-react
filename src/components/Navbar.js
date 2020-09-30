import React from 'react';
import { NavLink, useHistory, Redirect } from 'react-router-dom';

const Navbar = function (props) {
  const links = [
    { path: '/', text: 'All stories' },
    { path: '/myStories', text: 'Your stories' },
    { path: '/addStory', text: 'Add story' },
    { path: '/myApps', text: 'Your apps' },
    { path: '/createApp', text: 'Add app' }
  ];

  const history = useHistory();

  if (props.user === null) return <Redirect to='/login' />;

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

  const toProfile = () => history.push(`/user/${props.user.id}`);

  return (
    <div className='navbar'>
      <p onClick={toProfile}>Hello {props.user.name}</p>
      {navLinks}
    </div>
  );
};

export default Navbar;
