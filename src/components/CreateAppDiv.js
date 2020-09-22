import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Input from './Input';
import sendPostRequest from '../utils';

const CreateAppDiv = function () {
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
        return history.push(`/dashboard/app/${res.appId}`);
      }
      updateRegisterStatus(true);
    });
  };

  if (isError)
    return (
      <div className='dashboard-container'>
        <div className='createAppDiv'>
          <h3>Couldn't Register app</h3>
          <Link to='/dashboard/createApp'>Try again</Link>
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
          updateChange={updateName}
        />
        <label>
          Homepage url <span>*</span>
        </label>
        <Input
          value={homePage}
          placeholder='eg: http://example.com'
          updateChange={updateHomepage}
        />
        <label>
          Application Description <span>*</span>
        </label>
        <Input
          value={description}
          placeholder='eg: This is a nice app'
          updateChange={updateDescription}
        />
        <label>
          Callback url <span>*</span>
        </label>
        <Input
          value={callbackUrl}
          placeholder='eg: /sample/path/'
          updateChange={updateCallback}
        />
        <button onClick={handleClick}>Register</button>
      </div>
    </div>
  );
};

export default CreateAppDiv;
