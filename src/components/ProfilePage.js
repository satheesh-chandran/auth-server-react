import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import sendPostRequest from '../utils';

const ProfilePage = function (props) {
  const [user, updateUserData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    sendPostRequest('/api/userDetails', { id: +id }).then(updateUserData);
  }, [id]);

  if (props.user === null) {
    return <Redirect to='/login' />;
  }

  if (!user) return <div>Content loading...</div>;

  const { name, username, email, company } = user;

  return (
    <div className='dashboard-container'>
      <div className='profileBox'>
        <p>
          Name: <span>{name}</span>
        </p>
        <p>
          Username: <span>{username}</span>
        </p>
        <p>
          Email: <span>{email}</span>
        </p>
        <p>
          Company: <span>{company}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
