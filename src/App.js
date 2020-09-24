import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import './App.css';
import './auth.css';

const Home = lazy(() => import('./components/Home'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const LoginPage = lazy(() => import('./components/LoginPage'));
const SignUpPage = lazy(() => import('./components/SignUpPage'));

const App = function () {
  const [isLoggedIn, updateLoggedInStatus] = useState(false);
  const [user, updateUserDetails] = useState({});
  const location = useLocation();

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
      <Suspense fallback={<div />}>
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
            {isLoggedIn ? <Dashboard user={user} /> : <Redirect to='/' />}
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
