import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import StoryDiv from './StoryDiv';

const AllStories = function (props) {
  const [stories, updateStories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/allStories')
      .then(res => res.json())
      .then(stories => {
        updateStories(stories);
        setLoading(false);
      });
    return () => setLoading(true);
  }, []);

  if (props.user === null) {
    return <Redirect to='/login' />;
  }

  if (isLoading)
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
