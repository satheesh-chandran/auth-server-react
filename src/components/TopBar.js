import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => (
  <div className='topBar'>
    <span>Blog</span>
    <div className='homeOptions'>
      <Link to='/'>Home</Link>
    </div>
  </div>
);

export default TopBar;
