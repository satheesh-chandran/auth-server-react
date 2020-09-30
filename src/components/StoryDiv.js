import React from 'react';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';

const StoryDiv = function (props) {
  const history = useHistory();
  const toProfile = () => history.push(`/user/${props.story.ownerId}`);

  return (
    <div className='story'>
      <Link to={`/story/${props.story.id}`} style={{ fontWeight: 600 }}>
        {props.story.title}
      </Link>
      <p>
        Creator :{' '}
        <span className='creator' onClick={toProfile}>
          {props.story.name}
        </span>
      </p>
      <p>{moment(props.story.receivedAt).format('MMM Do YYYY, h:m:ss A')}</p>
    </div>
  );
};

export default StoryDiv;
