import React, { useState, useEffect } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';

const MyApps = function (props) {
  const [apps, updateApps] = useState([]);
  const [refresh, updateRefresh] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetch('/api/getMyApps')
      .then(res => res.json())
      .then(res => {
        if (res.protected) {
          return history.push('/');
        }
        updateApps(res.apps);
        updateRefresh(true);
        setLoading(false);
      });
  }, [refresh, history]);

  if (props.user === null) return <Redirect to='/login' />;

  if (isLoading) return <p>Application details are loading</p>;

  const appDivs = apps.map(({ id, name }, index) => {
    return (
      <div key={`apps_${index}`} className='appDiv'>
        <Link to={`/app/${id}`}>{name}</Link>
      </div>
    );
  });

  return <div className='dashboard-container'>{appDivs}</div>;
};

export default MyApps;
