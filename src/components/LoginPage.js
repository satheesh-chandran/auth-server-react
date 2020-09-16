import React from 'react';
import { Link } from 'react-router-dom';

import Input from './Input';

const LoginPage = function () {
  return (
    <div>
      <div className='topBar'>
        <span>Authorization Server</span>
        <div className='homeOptions'>
          <Link to='/'>Home</Link>
        </div>
      </div>
      <div className='loginWindow'>
        <h3>Login To your account</h3>
        <p>Fields shouldn't be empty</p>
        <label>
          Username <span>*</span>
        </label>
        <Input placeholder='John' />
        <label>
          Password <span>*</span>
        </label>
        <Input placeholder='John@123' />
        <button>Login</button>
        <span className='signupQuestion'>
          Do not have an account ?<Link to='/signup'>Signup</Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
