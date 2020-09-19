import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import './App.css';
import './auth.css';

import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard';
import CreateApp from './components/CreateApp';
import AppDetails from './components/AppDetails';
import MyApps from './components/MyApps';
import Authorize from './components/Authorize';
import AddStory from './components/AddStory';
import StoryPage from './components/StoryPage';

const App = function () {
  const [isLoggedIn, updateLoggedInStatus] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetch('/isLoggedIn')
      .then(res => res.json())
      .then(({ loggedIn }) => updateLoggedInStatus(loggedIn));
  });

  return (
    <div className='App'>
      <Switch location={location}>
        <Route exact path='/'>
          {isLoggedIn ? <Redirect to='/dashboard' /> : <Home />}
        </Route>
        <Route exact path='/login'>
          {isLoggedIn ? <Redirect to='/dashboard' /> : <LoginPage />}
        </Route>
        <Route exact path='/signup'>
          {isLoggedIn ? <Redirect to='/dashboard' /> : <SignUpPage />}
        </Route>
        <Route exact path='/dashboard'>
          {isLoggedIn ? <Dashboard /> : <Redirect to='/' />}
        </Route>
        <Route exact path='/dashboard/createApp'>
          {isLoggedIn ? <CreateApp /> : <Redirect to='/' />}
        </Route>
        <Route exact path='/dashboard/addStory'>
          {isLoggedIn ? <AddStory /> : <Redirect to='/' />}
        </Route>
        <Route exact path='/dashboard/app/:id'>
          <AppDetails />
        </Route>
        <Route exact path='/dashboard/story/:id'>
          <StoryPage />
        </Route>
        <Route exact path='/dashboard/myApps'>
          {isLoggedIn ? <MyApps /> : <Redirect to='/' />}
        </Route>
        <Route path={'/login/auth/authorize?clientId=&callbackUrl='}>
          <Authorize />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
