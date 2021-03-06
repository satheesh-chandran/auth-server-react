import React, { useState } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import Input from './Input';
import sendPostRequest from '../utils';

const CreateApp = function (props) {
  const [name, updateName] = useState('');
  const [homePage, updateHomepage] = useState('');
  const [callbackUrl, updateCallback] = useState('');
  const [description, updateDescription] = useState('');
  const [test, updateTestStatus] = useState(true);
  const [isError, updateRegisterStatus] = useState(false);

  const history = useHistory();

  const handleClick = function () {
    const fields = { name, homePage, description, callbackUrl };
    if (!Object.values(fields).every(value => value)) {
      return updateTestStatus(false);
    }
    sendPostRequest('/api/createApp', fields).then(res => {
      if (res.appId) {
        return history.push(`/app/${res.appId}`);
      }
      updateRegisterStatus(true);
    });
  };

  if (props.user === null) {
    return <Redirect to='/login' />;
  }

  if (isError)
    return (
      <div className='dashboard-container'>
        <div className='createAppDiv'>
          <h3>Couldn't Register app</h3>
          <Link to='/createApp'>Try again</Link>
        </div>
      </div>
    );

  return (
    <div className='dashboard-container'>
      <div className='createAppDiv'>
        <h3>Create you auth app</h3>
        <p className={test ? 'invisible' : ''}>Fields shouldn't be empty</p>
        <label>
          Application name <span>*</span>
        </label>
        <Input
          value={name}
          placeholder='eg: authApp'
          type='text'
          updateChange={updateName}
        />
        <label>
          Homepage url <span>*</span>
        </label>
        <Input
          value={homePage}
          placeholder='eg: http://example.com'
          type='text'
          updateChange={updateHomepage}
        />
        <label>
          Application Description <span>*</span>
        </label>
        <Input
          value={description}
          placeholder='eg: This is a nice app'
          type='text'
          updateChange={updateDescription}
        />
        <label>
          Callback url <span>*</span>
        </label>
        <Input
          value={callbackUrl}
          placeholder='eg: /sample/path/'
          type='text'
          updateChange={updateCallback}
        />
        <button onClick={handleClick}>Register</button>
      </div>
    </div>
  );
};

export default CreateApp;
