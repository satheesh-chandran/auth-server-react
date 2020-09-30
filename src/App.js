import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import './App.css';
import './auth.css';

import Header from './components/Header';
import NavBar from './components/Navbar';
import MyApps from './components/MyApps';
import AddStory from './components/AddStory';
import LoginPage from './components/LoginPage';
import CreateApp from './components/CreateApp';
import StoryPage from './components/StoryPage';
import MyStories from './components/MyStories';
import AppDetails from './components/AppDetails';
import SignUpPage from './components/SignUpPage';
import AllStories from './components/AllStories';
import ProfilePage from './components/ProfilePage';

const App = function () {
  const [user, updateUserDetails] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/isLoggedIn')
      .then(res => res.json())
      .then(res => {
        if (res.loggedIn) updateUserDetails(res.userDetails);
        else updateUserDetails(null);
        return setLoading(false);
      });
  }, []);

  const privatePages = [
    { path: '/myApps', component: MyApps, exact: true },
    { path: '/addStory', component: AddStory, exact: true },
    { path: '/app/:id', component: AppDetails, exact: true },
    { path: '/createApp', component: CreateApp, exact: true },
    { path: '/myStories', component: MyStories, exact: true },
    { path: '/story/:id', component: StoryPage, exact: true },
    { path: '/user/:id', component: ProfilePage, exact: true },
    { path: '/', component: AllStories, exact: true }
  ];

  if (isLoading) return <p>Site is is loading...</p>;

  const routers = privatePages.map((page, index) => (
    <Route
      exact={page.exact}
      path={page.path}
      key={`dashboard_router${index}`}
      children={<page.component user={user} />}
    />
  ));

  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' children={<LoginPage user={user} />} />
          <Route exact path='/signup' children={<SignUpPage user={user} />} />
          <div>
            <Header />
            <div className='dashboard'>
              <NavBar user={user} />
              {routers}
              {/* <Redirect to='/' /> */}
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
