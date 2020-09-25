import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import sendPostRequest from '../utils';

import Input from './Input';

const StoryPage = function () {
  const [story, updateStory] = useState({ responses: [] });
  const { id } = useParams();

  const [message, updateMessage] = useState('');
  const [refresh, updateRefreshState] = useState(false);

  const history = useHistory();

  useEffect(() => {
    sendPostRequest('/api/getStory', { id: +id }).then(res => {
      updateStory(res);
    });
  }, [refresh, id]);

  const postResponse = function () {
    const options = { storyId: +id, message };
    sendPostRequest('/api/addResponse', options).then(() => {
      updateRefreshState(state => !state);
      updateMessage('');
    });
  };

  const responseDivs = story.responses.map(response => {
    const toProfile = () => history.push(`/dashboard/user/${response.ownerId}`);

    const deleteResponse = () =>
      sendPostRequest('/api/deleteResponse', { id: response.id }).then(() => {
        updateRefreshState(state => !state);
      });
    return (
      <div className='response' key={`response_${response.id}`}>
        <p>{response.message}</p>
        <p>
          Responded by,
          <span className='creator' onClick={toProfile}>
            {response.username}
          </span>
        </p>
        <p className='date'>{response.receivedAt}</p>
        <button onClick={deleteResponse}>Delete</button>
      </div>
    );
  });

  const deleteStory = () =>
    sendPostRequest('/api/deleteStory', { id: story.id }).then(() => {
      history.push('/dashboard');
    });

  return (
    <div className='dashboard-container'>
      <div className='storyPage'>
        <div>
          <h2>{story.title}</h2>
          <p>Creator: {story.name}</p>
          <p className='date'>{story.receivedAt}</p>
          <button onClick={deleteStory}>Delete story</button>
        </div>
        <div className='body'>
          <p>{story.body}</p>
        </div>
        <Input
          value={message}
          placeholder='You can response to this story'
          updateChange={updateMessage}
          type='text'
        />
        <button style={{ marginTop: '1%' }} onClick={postResponse}>
          Respond
        </button>
        <p style={{ fontWeight: 600 }}>All responses</p>
        <div>{responseDivs}</div>
      </div>
    </div>
  );
};

export default StoryPage;
