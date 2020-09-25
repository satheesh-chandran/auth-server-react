import React, { useState, useEffect } from 'react';
import { Route, Redirect, useHistory, Switch } from 'react-router-dom';

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

const App = function () {
  const [, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const history = useHistory();

  useEffect(() => {
    fetch('/isLoggedIn')
      .then(res => res.json())
      .then(res => {
        if (res.loggedIn) {
          setUser(res.userDetails);
          setIsLoading(false);
          setAuthenticated(true);
        } else {
          setIsLoading(false);
        }
      });
    return () => history.push('/');
  }, []);

  if (isLoading) return <></>;

  if (isAuthenticated) return <Redirect to='/dashboard' />;

  return (
    <div className='App'>
      <Route exact path='/'>
        <LoginPage />
      </Route>
      <Route exact path='/login'>
        <LoginPage />
      </Route>
      <Route exact path='/signup'>
        <SignUpPage />
      </Route>
    </div>
  );
};

export default App;
