import React, { useState, useEffect } from 'react';
import StoryDiv from './StoryDiv';

const MyStories = function () {
  const [stories, updateStories] = useState([]);

  useEffect(() => {
    fetch('/api/yourStories')
      .then(res => res.json())
      .then(updateStories);
  }, []);

  return (
    <div className='dashboard-container'>
      {stories.map(story => (
        <StoryDiv story={story} key={`story_${story.id}`} />
      ))}
    </div>
  );
};

export default MyStories;
