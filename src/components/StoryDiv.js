import React from 'react';
import { Link } from 'react-router-dom';

const StoryDiv = function (props) {
  return (
    <div className='story'>
      <Link to={`/dashboard/story/${props.story.id}`}>{props.story.title}</Link>
      <p>
        Creator: <span>{props.story.name}</span>
      </p>
      <p>{props.story.receivedAt}</p>
    </div>
  );
};

export default StoryDiv;
