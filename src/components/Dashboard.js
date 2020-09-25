import React from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';

import Header from './Header';
import NavBar from './Navbar';
import MyApps from './MyApps';
import AddStory from './AddStory';
import CreateApp from './CreateApp';
import StoryPage from './StoryPage';
import MyStories from './MyStories';
import AppDetails from './AppDetails';
import AllStories from './AllStories';
import ProfilePage from './ProfilePage';

const Dashboard = function (props) {
  const location = useLocation();

  const pages = [
    { path: '/dashboard', component: AllStories },
    { path: '/dashboard/myApps', component: MyApps },
    { path: '/dashboard/addStory', component: AddStory },
    { path: '/dashboard/app/:id', component: AppDetails },
    { path: '/dashboard/createApp', component: CreateApp },
    { path: '/dashboard/myStories', component: MyStories },
    { path: '/dashboard/story/:id', component: StoryPage },
    { path: '/dashboard/user/:id', component: ProfilePage }
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
        <NavBar user={props.user} />
        <Switch location={location}>{routers}</Switch>
      </div>
    </div>
  );
};

export default Dashboard;
