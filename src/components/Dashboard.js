import React from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './Navbar';

import CreateApp from './CreateApp';
import AppDetails from './AppDetails';
import MyApps from './MyApps';
import AddStory from './AddStory';
import StoryPage from './StoryPage';
import AllStories from './AllStories';
import MyStories from './MyStories';

const Dashboard = function () {
  const location = useLocation();

  const pages = [
    { path: '/dashboard', component: AllStories },
    { path: '/dashboard/myApps', component: MyApps },
    { path: '/dashboard/addStory', component: AddStory },
    { path: '/dashboard/app/:id', component: AppDetails },
    { path: '/dashboard/createApp', component: CreateApp },
    { path: '/dashboard/myStories', component: MyStories },
    { path: '/dashboard/story/:id', component: StoryPage }
  ];

  const routers = pages.map((page, index) => (
    <Route exact path={page.path} key={`dashboard_router${index}`}>
      <page.component />
    </Route>
  ));

  return (
    <div>
      <Header />
      <div className='dashboard'>
        <NavBar />
        <Switch location={location}>{routers}</Switch>
      </div>
    </div>
  );
};

export default Dashboard;
