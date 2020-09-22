import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import './App.css';
import './auth.css';

import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard';

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
        <Route path='/dashboard'>
          {isLoggedIn ? <Dashboard /> : <Redirect to='/' />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
