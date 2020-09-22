import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sendPostRequest from '../utils';

import Input from './Input';

const StoryPage = function () {
  const [story, updateStory] = useState({ responses: [] });
  const { id } = useParams();

  const [message, updateMessage] = useState('');
  const [refresh, updateRefreshState] = useState(false);

  useEffect(() => {
    sendPostRequest('/api/getStory', { id: +id }).then(res => {
      updateStory(res);
    });
  }, [refresh]);

  const postResponse = function () {
    const options = { storyId: +id, message };
    sendPostRequest('/api/addResponse', options).then(() => {
      updateRefreshState(state => !state);
      updateMessage('');
    });
  };

  const responseDivs = story.responses.map(response => {
    return (
      <div className='response' key={`response_${response.id}`}>
        <p>{response.message}</p>
        <p>{response.username}</p>
        <p className='date'>{response.receivedAt}</p>
      </div>
    );
  });

  return (
    <div className='dashboard-container'>
      <div className='storyPage'>
        <div>
          <h2>{story.title}</h2>
          <p>Creator: {story.name}</p>
          <p className='date'>{story.receivedAt}</p>
        </div>
        <div className='body'>
          <p>{story.body}</p>
        </div>
        <Input
          value={message}
          placeholder='You can response to this story'
          updateChange={updateMessage}
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
