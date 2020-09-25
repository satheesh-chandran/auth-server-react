import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import './App.css';
import './auth.css';

import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

const App = function () {
  const [isLoggedIn, updateLoggedInStatus] = useState(false);
  const [user, updateUserDetails] = useState({});

  useEffect(() => {
    fetch('/isLoggedIn')
      .then(res => res.json())
      .then(res => {
        updateLoggedInStatus(res.loggedIn);
        updateUserDetails(res.userDetails);
      });
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {isLoggedIn ? <Redirect to='/dashboard' /> : <LoginPage />}
          </Route>
          <Route exact path='/login'>
            {isLoggedIn ? <Redirect to='/dashboard' /> : <LoginPage />}
          </Route>
          <Route exact path='/signup'>
            {isLoggedIn ? <Redirect to='/dashboard' /> : <SignUpPage />}
          </Route>
          <Route path='/dashboard'>
            {isLoggedIn ? <Dashboard user={user} /> : <Redirect to='/' />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
