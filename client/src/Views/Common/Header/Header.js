import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


function Header() {

  return (
    <div className="wrapper">
      <div className="topHeader">
        <div className="logoAndLogout"><Link to={'/LatestReviews'}>IGDB</Link></div>
        <div className="profileButton">
          <i className="material-icons" id='profileIcon'>
            <Link to={'/profile'}>person</Link>
          </i>
          <div className="logoAndLogout" hidden="true">Logout</div>
        </div>
      </div>
      <div className="menu-container">
        <Menu className="Menu" />
      </div>
    </div>
  );
}



export default Header;
