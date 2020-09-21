import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sendPostRequest from '../utils';

import Header from './Header';
import NavBar from './Navbar';
import Input from './Input';

const StoryPage = function () {
  const [story, updateStory] = useState({});
  const { id } = useParams();

  const [message, updateMessage] = useState('');
  const [refresh, updateRefreshState] = useState(false);

  useEffect(() => {
    sendPostRequest('/api/getStory', { id: +id }).then(res => {
      console.log(res);
      updateStory(res);
    });
  }, [refresh]);

  const postResponse = function () {
    sendPostRequest('/api/addResponse', {
      storyId: +id,
      message
    }).then(() => {
      updateRefreshState(state => !state);
    });
  };

  return (
    <div>
      <Header links={[{ path: '/logout', text: 'Logout' }]} />
      <div className='dashboard'>
        <NavBar />
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
              placeholder='You can response to this story'
              updateChange={updateMessage}
            />
            <button style={{ marginTop: '1%' }} onClick={postResponse}>
              Respond
            </button>
            <p style={{ fontWeight: 600 }}>All responses</p>
            <div>
              <div className='response'>
                <p>This is my message</p>
                <p>By: satheesh</p>
                <p className='date'>today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
