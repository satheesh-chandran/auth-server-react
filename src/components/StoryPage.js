import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sendPostRequest from '../utils';

import Header from './Header';
import NavBar from './Navbar';

const StoryPage = function () {
  const [story, updateStory] = useState({});
  const { id } = useParams();

  useEffect(() => {
    sendPostRequest('/api/getStory', { id: +id }).then(res => updateStory(res));
  }, []);

  return (
    <div>
      <Header links={[{ path: '/logout', text: 'Logout' }]} />
      <div className='dashboard'>
        <NavBar />
        <div className='dashboard-container'>
          <h3>{story.title}</h3>
          {story.body}
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
