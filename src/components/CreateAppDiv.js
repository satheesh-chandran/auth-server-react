import React, { useState } from 'react';
import Input from './Input';
import { useHistory } from 'react-router-dom';
import sendPostRequest from '../utils';

const CreateAppDiv = function () {
  const [name, updateName] = useState('');
  const [homePage, updateHomepage] = useState('');
  const [description, updateDescription] = useState('');
  const [callbackUrl, updateCallback] = useState('');
  const [test, updateTestStatus] = useState(true);

  const history = useHistory();

  const handleClick = function () {
    const fields = { name, homePage, description, callbackUrl };
    if (!Object.values(fields).every(value => value)) {
      return updateTestStatus(false);
    }
    sendPostRequest('/api/createApp', fields).then(res => {
      if (res.status) {
        return history.push('/');
      }
    });
  };

  return (
    <div className='dashboard-container'>
      <div className='createAppDiv'>
        <h3>Create you auth app</h3>
        <p className={test ? 'invisible' : ''}>Fields shouldn't be empty</p>
        <label>
          Application name <span>*</span>
        </label>
        <Input placeholder='eg: authApp' updateChange={updateName} />
        <label>
          Homepage url <span>*</span>
        </label>
        <Input
          placeholder='eg: http://example.com'
          updateChange={updateHomepage}
        />
        <label>
          Application Description <span>*</span>
        </label>
        <Input
          placeholder='eg: This is a nice app'
          updateChange={updateDescription}
        />
        <label>
          Callback url <span>*</span>
        </label>
        <Input placeholder='eg: /sample/path/' updateChange={updateCallback} />
        <button onClick={handleClick}>Register</button>
      </div>
    </div>
  );
};

export default CreateAppDiv;
