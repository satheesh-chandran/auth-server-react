import React, { useState, useEffect } from 'react';
import StoryDiv from './StoryDiv';

const AllStories = function () {
  const [stories, updateStories] = useState([]);

  useEffect(() => {
    fetch('/api/allStories')
      .then(res => res.json())
      .then(updateStories);
  }, []);

  if (!stories)
    return <div className='dashboard-container'>Stories are loading...</div>;

  return (
    <div className='dashboard-container'>
      {stories.map(story => (
        <StoryDiv story={story} key={`story_${story.id}`} />
      ))}
    </div>
  );
};

export default AllStories;
