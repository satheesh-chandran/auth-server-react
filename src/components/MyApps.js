import React, { useState, useEffect } from 'react';
import Header from './Header';
import NavBar from './Navbar';
import { useHistory, Link } from 'react-router-dom';

const MyApps = function () {
  const [apps, updateApps] = useState([]);
  const [refresh, updateRefresh] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch('/api/getMyApps')
      .then(res => res.json())
      .then(res => {
        if (res.protected) {
          return history.push('/dashboard');
        }
        updateApps(res.apps);
        updateRefresh(true);
      });
  }, [refresh]);

  const appDivs = apps.map(({ id, name }, index) => {
    return (
      <div key={`apps_${index}`} className='appDiv'>
        <Link to={`/dashboard/app/${id}`}>{name}</Link>
      </div>
    );
  });

  return (
    <div>
      <Header links={[{ path: '/logout', text: 'Logout' }]} />
      <div className='dashboard'>
        <NavBar />
        <div className='dashboard-container'>{appDivs}</div>
      </div>
    </div>
  );
};

export default MyApps;
