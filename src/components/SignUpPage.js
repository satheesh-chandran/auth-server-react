import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from './Input';

import sendPostRequest from '../utils';

const SignUpPage = function () {
  const [name, updateName] = useState('');
  const [username, updateUsername] = useState('');
  const [email, updateEmail] = useState('');
  const [company, updateCompany] = useState('');
  const [password, updatePassword] = useState('');
  const [test, updateTestStatus] = useState(true);

  const history = useHistory();

  const handleClick = function () {
    const fields = { name, username, password, email, company };
    if (Object.values(fields).every(value => value)) {
      return updateTestStatus(false);
    }
    sendPostRequest('/loginToApp', fields).then(() => {
      history.push('/');
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
        <h3>Create your account</h3>
        <p className={test ? 'invisible' : ''}>Fields shouldn't be empty</p>
        <label>
          Name <span>*</span>
        </label>
        <Input placeholder='John' updateChange={updateName} />
        <label>
          Username <span>*</span>
        </label>
        <Input placeholder='John' updateChange={updateUsername} />
        <label>
          Email <span>*</span>
        </label>
        <Input placeholder='John@example.com' updateChange={updateEmail} />
        <label>
          Company <span>*</span>
        </label>
        <Input placeholder='Example Pvt Ltd.' updateChange={updateCompany} />
        <label>
          Password <span>*</span>
        </label>
        <Input placeholder='John@123' updateChange={updatePassword} />
        <button onClick={handleClick}>Signup</button>
        <span className='signupQuestion'>
          Have an account ?<Link to='/login'>Login</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
