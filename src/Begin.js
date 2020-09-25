import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import './auth.css';

import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

import UserContext from './components/UserContext';

const App = function () {
  const [user, setUser] = useState(null);

  return (
    <div className='App'>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <LoginPage />
            </Route>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <Route exact path='/signup'>
              <SignUpPage />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
};

export default App;
