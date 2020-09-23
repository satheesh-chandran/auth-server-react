import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from './Input';
import TopBar from './TopBar';

import sendPostRequest from '../utils';

const LoginPage = function () {
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [test, updateTestStatus] = useState(true);
  const [isError, updateLoginStatus] = useState(false);

  const history = useHistory();

  const handleClick = function () {
    const fields = { username, password };
    if (!Object.values(fields).every(value => value)) {
      return updateTestStatus(false);
    }
    sendPostRequest('/api/loginToApp', fields).then(res => {
      if (res.status) {
        return history.push('/');
      }
      updateLoginStatus(true);
    });
  };

  if (isError) {
    return (
      <div>
        <TopBar />
        <h3>Login failed</h3>
        <Link to='/login'>Try again</Link>
      </div>
    );
  }

  return (
    <div>
      <TopBar />
      <div className='loginWindow'>
        <h3>Login To your account</h3>
        <p className={test ? 'invisible' : ''}>Fields shouldn't be empty</p>
        <label>
          Username <span>*</span>
        </label>
        <Input
          placeholder='eg: John'
          type='text'
          value={username}
          updateChange={updateUsername}
        />
        <label>
          Password <span>*</span>
        </label>
        <Input
          placeholder='eg: John@123'
          type='password'
          value={password}
          updateChange={updatePassword}
        />
        <button onClick={handleClick}>Login</button>
        <span className='signupQuestion'>
          Do not have an account ?<Link to='/signup'>Signup</Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
