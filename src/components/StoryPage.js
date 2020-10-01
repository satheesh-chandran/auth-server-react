import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import moment from 'moment';
import sendPostRequest from '../utils';

import Input from './Input';

const StoryPage = function (props) {
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

  if (props.user === null) {
    return <Redirect to='/login' />;
  }

  const postResponse = function () {
    if (message.trim() === '') return;
    const options = { storyId: +id, message };
    sendPostRequest('/api/addResponse', options).then(() => {
      updateRefreshState(state => !state);
      updateMessage('');
    });
  };

  const responseDivs = story.responses.map(response => {
    const toProfile = () => history.push(`/user/${response.ownerId}`);

    const deleteResponse = () =>
      sendPostRequest('/api/deleteResponse', { id: response.id }).then(() => {
        updateRefreshState(state => !state);
      });
    return (
      <div className='response' key={`response_${response.id}`}>
        <p>{response.message}</p>
        <p>
          Responded by,{' '}
          <span className='creator' onClick={toProfile}>
            {response.username}
          </span>
        </p>
        <p className='date'>
          {moment(response.receivedAt).format('MMM Do YYYY, h:m:ss A')}
        </p>
        {props.user.id === response.ownerId ? (
          <button onClick={deleteResponse}>Delete</button>
        ) : (
          <></>
        )}
      </div>
    );
  });

  const deleteStory = () =>
    sendPostRequest('/api/deleteStory', { id: story.id }).then(() => {
      history.push('/');
    });

  return (
    <div className='dashboard-container'>
      <div className='storyPage'>
        <div>
          <h2>{story.title}</h2>
          <p>Creator: {story.name}</p>
          <p className='date'>
            {moment(story.receivedAt).format('MMM Do YYYY, h:m:ss A')}
          </p>
          {props.user.id === story.ownerId ? (
            <button onClick={deleteStory}>Delete story</button>
          ) : (
            <></>
          )}
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
