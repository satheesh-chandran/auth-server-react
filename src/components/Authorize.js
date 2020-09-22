import React, { useState } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';

import Header from './Header';
import Input from './Input';
import sendPostRequest from '../utils';

const useQuery = function () {
  return new URLSearchParams(useLocation().search);
};

const Authorize = function () {
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [test, updateTestStatus] = useState(true);
  const [isError, updateAuthStatus] = useState(false);

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
      updateAuthStatus(true);
    });
  };

  const query = useQuery();

  return (
    <div>
      <Header links={[]} />
      <div className='dashboard'>
        <div className='authorize'>
          <h3>Login To your account</h3>
          <p className={test ? 'invisible' : ''}>Fields shouldn't be empty</p>
          <label>
            Username <span>*</span>
          </label>
          <Input
            placeholder='eg: John'
            value={username}
            updateChange={updateUsername}
          />
          <label>
            Password <span>*</span>
          </label>
          <Input
            placeholder='eg: John@123'
            value={password}
            updateChange={updatePassword}
          />
          <button onClick={handleClick}>Login</button>
          <span className='signupQuestion'>
            Do not have an account ?<Link to='/signup'>Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Authorize;
