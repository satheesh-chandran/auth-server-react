import React, { useState, useEffect } from 'react';
import Header from './Header';
import NavBar from './Navbar';
import StoryDiv from './StoryDiv';

const AllStories = function () {
  const [stories, updateStories] = useState([]);

  useEffect(() => {
    fetch('/api/yourStories')
      .then(res => res.json())
      .then(updateStories);
  }, []);

  return (
    <div>
      <Header links={[{ path: '/logout', text: 'Logout' }]} />
      <div className='dashboard'>
        <NavBar />
        <div className='dashboard-container'>
          {stories.map(story => (
            <StoryDiv story={story} key={`story_${story.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllStories;
