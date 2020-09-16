import React from 'react';
import { Link } from 'react-router-dom';

const Home = function () {
  return (
    <div className='topBar'>
      <span>Authorization Server</span>
      <div className='homeOptions'>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Home;
