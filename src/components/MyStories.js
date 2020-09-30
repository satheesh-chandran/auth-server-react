import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import StoryDiv from './StoryDiv';

const MyStories = function (props) {
  const [stories, updateStories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/yourStories')
      .then(res => res.json())
      .then(res => {
        updateStories(res);
        setLoading(false);
      });
  }, []);

  if (props.user === null) return <Redirect to='/login' />;
  if (isLoading) return <p>Story is is loading...</p>;

  return (
    <div className='dashboard-container'>
      {stories.map(story => (
        <StoryDiv story={story} key={`story_${story.id}`} />
      ))}
    </div>
  );
};

export default MyStories;
