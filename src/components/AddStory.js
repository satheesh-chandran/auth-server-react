import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Input from './Input';
import sendPostRequest from '../utils';

const AddStory = function (props) {
  const [title, updateTitle] = useState('');
  const [body, updateBody] = useState('');
  const history = useHistory();
  const submitStory = function () {
    sendPostRequest('/api/addStory', { title, body }).then(res => {
      history.push(`/story/${res.storyId}`);
    });
  };

  if (props.user === null) {
    return <Redirect to='/login' />;
  }

  return (
    <div className='dashboard-container'>
      <div className='addStory'>
        <h3>Add new story</h3>
        <Input
          placeholder='Enter Title'
          value={title}
          updateChange={updateTitle}
          type='text'
        />
        <textarea
          placeholder='Enter content'
          cols='100'
          rows='15'
          value={body}
          onChange={event => updateBody(event.target.value)}
        ></textarea>
        <button onClick={submitStory}>Add Story</button>
      </div>
    </div>
  );
};

export default AddStory;
