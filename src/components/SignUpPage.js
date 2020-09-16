import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = function () {
  return (
    <div>
      <div className='topBar'>
        <span>Authorization Server</span>
      </div>
      <div className='loginWindow'>
        <h3>Create your account</h3>
        <p>Fields shouldn't be empty</p>
        <label>
          Username <span>*</span>
        </label>
        <input placeholder='John'></input>
        <label>
          Email <span>*</span>
        </label>
        <input placeholder='John@example.com'></input>
        <label>
          Company <span>*</span>
        </label>
        <input placeholder='Example Pvt Ltd.'></input>
        <label>
          Password <span>*</span>
        </label>
        <input placeholder='John@123'></input>
        <button>Signup</button>
        <span className='signupQuestion'>
          Have an account ?<Link to='/login'>Login</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
