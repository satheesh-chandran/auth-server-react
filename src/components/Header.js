import React, { useState } from 'react';

const Header = function () {
  const [popUpVisibility, changeVisibility] = useState(false);

  const logout = () =>
    fetch('/api/logout').then(() => (document.location = '/'));

  return (
    <div className='topBar'>
      <span>Blog</span>
      <div className={`${!popUpVisibility ? '' : 'hide'} homeOptions`}>
        <button onClick={() => changeVisibility(true)}>Logout</button>
      </div>
      <div className={`${popUpVisibility ? '' : 'hide'} logoutPopup`}>
        <p>Are you sure to logout ?</p>
        <div className='logoutOptions'>
          <button onClick={logout}>Yes</button>
          <button onClick={() => changeVisibility(false)}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
