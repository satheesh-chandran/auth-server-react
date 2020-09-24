import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const StoryDiv = function (props) {
  const history = useHistory();
  const toProfile = () =>
    history.push(`/dashboard/user/${props.story.ownerId}`);

  return (
    <div className='story'>
      <Link to={`/dashboard/story/${props.story.id}`}>{props.story.title}</Link>
      <p>
        Creator:{' '}
        <span className='creator' onClick={toProfile}>
          {props.story.name}
        </span>
      </p>
      <p>{props.story.receivedAt}</p>
    </div>
  );
};

export default StoryDiv;
