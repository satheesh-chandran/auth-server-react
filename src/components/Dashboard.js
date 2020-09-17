import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './Header';
import NavBar from './Navbar';
import DashboardStatic from './DashboardSatic';

const Dashboard = function () {
  return (
    <div>
      <Header links={[{ path: '/logout', text: 'Logout' }]} />
      <div className='dashboard'>
        <BrowserRouter>
          <NavBar />
          <DashboardStatic />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Dashboard;
