import React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';

const SignUpPage = function () {
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
        <p>Fields shouldn't be empty</p>
        <label>
          Name <span>*</span>
        </label>
        <Input placeholder='John' />
        <label>
          Username <span>*</span>
        </label>
        <Input placeholder='John' />
        <label>
          Email <span>*</span>
        </label>
        <Input placeholder='John@example.com' />
        <label>
          Company <span>*</span>
        </label>
        <Input placeholder='Example Pvt Ltd.' />
        <label>
          Password <span>*</span>
        </label>
        <Input placeholder='John@123' />
        <button>Signup</button>
        <span className='signupQuestion'>
          Have an account ?<Link to='/login'>Login</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
