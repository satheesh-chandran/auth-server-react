import React, { useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import Input from './Input';
import TopBar from './TopBar';

import sendPostRequest from '../utils';

const SignUpPage = function (props) {
  const [name, updateName] = useState('');
  const [username, updateUsername] = useState('');
  const [email, updateEmail] = useState('');
  const [company, updateCompany] = useState('');
  const [password, updatePassword] = useState('');
  const [test, updateTestStatus] = useState(true);
  const [usernameExists, updateSignStatus] = useState(false);

  const history = useHistory();

  const handleClick = function () {
    const fields = { name, username, password, email, company };
    if (!Object.values(fields).every(value => value !== '')) {
      return updateTestStatus(false);
    }
    sendPostRequest('/api/signinToApp', fields).then(res => {
      if (res.status) {
        return history.push('/');
      }
      updateSignStatus(true);
    });
  };

  if (props.user !== null) {
    return <Redirect to='/' />;
  }

  if (usernameExists) {
    return (
      <div>
        <TopBar />
        <h3>Username already exists</h3>
        <Link to='/signup'>Try again</Link>
      </div>
    );
  }

  return (
    <div>
      <TopBar />
      <div className='loginWindow'>
        <h3>Create your account</h3>
        <p className={test ? 'invisible' : ''}>Fields shouldn't be empty</p>
        <label>
          Name <span>*</span>
        </label>
        <Input
          placeholder='eg: John'
          type='text'
          value={name}
          updateChange={updateName}
        />
        <label>
          Username <span>*</span>
        </label>
        <Input
          placeholder='eg: John'
          value={username}
          type='text'
          updateChange={updateUsername}
        />
        <label>
          Email <span>*</span>
        </label>
        <Input
          placeholder='eg: John@example.com'
          value={email}
          type='text'
          updateChange={updateEmail}
        />
        <label>
          Company <span>*</span>
        </label>
        <Input
          value={company}
          type='text'
          placeholder='eg: Example Pvt Ltd.'
          updateChange={updateCompany}
        />
        <label>
          Password <span>*</span>
        </label>
        <Input
          placeholder='eg: John@123'
          value={password}
          type='password'
          updateChange={updatePassword}
        />
        <button onClick={handleClick}>Signup</button>
        <span className='signupQuestion'>
          Have an account ?<Link to='/login'>Login</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
