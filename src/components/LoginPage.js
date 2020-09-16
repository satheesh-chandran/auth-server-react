import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from './Input';

import sendPostRequest from '../utils';

const LoginPage = function () {
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [test, updateTestStatus] = useState(true);

  const history = useHistory();

  const handleClick = function () {
    const fields = { username, password };
    if (Object.values(fields).every(value => value)) {
      return updateTestStatus(false);
    }
    sendPostRequest('/signup', fields).then(() => {
      history.push('/signup');
    });
  };

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
        <p className={test ? 'invisible' : ''}>Fields shouldn't be empty</p>
        <label>
          Username <span>*</span>
        </label>
        <Input placeholder='John' updateChange={updateUsername} />
        <label>
          Password <span>*</span>
        </label>
        <Input placeholder='John@123' updateChange={updatePassword} />
        <button onClick={handleClick}>Login</button>
        <span className='signupQuestion'>
          Do not have an account ?<Link to='/signup'>Signup</Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
