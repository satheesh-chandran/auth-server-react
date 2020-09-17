import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';

import './App.css';
import './auth.css';

import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard';

const App = function () {
  const [isLoggedIn, updateLoggedInStatus] = useState(false);

  useEffect(() => {
    fetch('/isLoggedIn')
      .then(res => res.json())
      .then(({ loggedIn }) => updateLoggedInStatus(loggedIn));
  });

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          {isLoggedIn ? <Redirect to='/dashboard' /> : <Home />}
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/signup'>
          <SignUpPage />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
