import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from './Input';
import TopBar from './TopBar';

import sendPostRequest from '../utils';

const SignUpPage = function () {
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
    console.log(fields);
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
        <Input placeholder='eg: John' updateChange={updateName} />
        <label>
          Username <span>*</span>
        </label>
        <Input placeholder='eg: John' updateChange={updateUsername} />
        <label>
          Email <span>*</span>
        </label>
        <Input placeholder='eg: John@example.com' updateChange={updateEmail} />
        <label>
          Company <span>*</span>
        </label>
        <Input
          placeholder='eg: Example Pvt Ltd.'
          updateChange={updateCompany}
        />
        <label>
          Password <span>*</span>
        </label>
        <Input placeholder='eg: John@123' updateChange={updatePassword} />
        <button onClick={handleClick}>Signup</button>
        <span className='signupQuestion'>
          Have an account ?<Link to='/login'>Login</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
