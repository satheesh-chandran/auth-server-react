import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useParams, useHistory } from 'react-router-dom';
import NavBar from './Navbar';
import sendPostRequest from '../utils';

const AppDetails = function () {
  const { id } = useParams();
  const history = useHistory();
  const [appDetails, updateAppDetails] = useState(null);

  useEffect(() => {
    sendPostRequest('/api/getAppDetails', { id: +id }).then(res => {
      if (res.protected) {
        return history.push('/dashboard');
      }
      updateAppDetails(res.details);
    });
  }, []);

  if (appDetails === null)
    return (
      <div>
        <Header links={[{ path: '/logout', text: 'Logout' }]} />
        <div className='dashboard'>
          <NavBar />
          <div className='dashboard-container'></div>
        </div>
      </div>
    );

  return (
    <div>
      <Header links={[{ path: '/logout', text: 'Logout' }]} />
      <div className='dashboard'>
        <NavBar />
        <div className='dashboard-container'>
          <div className='appDetails'>
            <h3>
              App name: <span>{appDetails.name}</span>
            </h3>
            <h3>
              Client Id: <span>{appDetails.clientId}</span>
            </h3>
            <h3>
              Client Secret: <span>{appDetails.clientSecret}</span>
            </h3>
            <h3>
              Description: <span>{appDetails.description}</span>
            </h3>
            <h3>
              Homepage: <span>{appDetails.homePage}</span>
            </h3>
            <h3>
              Callback url: <span>{appDetails.callbackUrl}</span>
            </h3>
            <h3>
              Created at: <span>Few minutes ago</span>
            </h3>
            <button style={{ width: '20%' }}>Transfer Ownership</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
