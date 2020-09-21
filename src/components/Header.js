import React from 'react';
import { Link } from 'react-router-dom';

const Header = function (props) {
  const links = props.links.map(({ path, text }, index) => (
    <Link to={path} key={index}>
      {text}
    </Link>
  ));
  return (
    <div className='topBar'>
      <span>Blog</span>
      <div className='homeOptions'>{links}</div>
    </div>
  );
};

export default Header;
