import React from 'react';
import Header from './Header';
import NavBar from './Navbar';

const Dashboard = function () {
  return (
    <div>
      <Header links={[{ path: '/logout', text: 'Logout' }]} />
      <div className='dashboard'>
        <NavBar />
        <div className='dashboard-container'></div>
      </div>
    </div>
  );
};

export default Dashboard;
