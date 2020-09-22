import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from './Input';
import sendPostRequest from '../utils';

const AddStory = function () {
  const [title, updateTitle] = useState('');
  const [body, updateBody] = useState('');
  const history = useHistory();
  const submitStory = function () {
    sendPostRequest('/api/addStory', { title, body }).then(res => {
      history.push(`/dashboard/story/${res.storyId}`);
    });
  };

  return (
    <div className='dashboard-container'>
      <div className='addStory'>
        <Input
          placeholder='Enter Title'
          value={title}
          updateChange={updateTitle}
        />
        <textarea
          placeholder='Enter body'
          cols='100'
          rows='25'
          value={body}
          onChange={event => updateBody(event.target.value)}
        ></textarea>
        <button onClick={submitStory}>Add Story</button>
      </div>
    </div>
  );
};

export default AddStory;
