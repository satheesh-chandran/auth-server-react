import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = function () {
  return (
    <div>
      <div className='topBar'>
        <span>Authorization Server</span>
      </div>
      <div className='loginWindow'>
        <h3>Login To your account</h3>
        <p>Fields shouldn't be empty</p>
        <label>
          Username <span>*</span>
        </label>
        <input placeholder='John'></input>
        <label>
          Password <span>*</span>
        </label>
        <input placeholder='John@123'></input>
        <button>Login</button>
        <span className='signupQuestion'>
          Do not have an account ?<Link to='/signup'>Signup</Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
