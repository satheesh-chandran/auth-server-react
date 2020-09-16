import React from 'react';
import './App.css';
import './auth.css';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage.js';

const App = function () {
  const location = useLocation();
  return (
    <div className='App'>
      <Switch location={location}>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/signup'>
          <SignUpPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
