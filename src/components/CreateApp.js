import React from 'react';
import Header from './Header';
import CreateAppDiv from './CreateAppDiv';
import NavBar from './Navbar';

const CreateApp = function () {
  return (
    <div>
      <Header links={[{ path: '/logout', text: 'Logout' }]} />
      <div className='dashboard'>
        <NavBar />
        <CreateAppDiv />
      </div>
    </div>
  );
};

export default CreateApp;
