import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


function Header() {

  return (
    <div className="wrapper">
      <div className="topHeader">
        <div className="logo"><Link to={'/news'}>IGDB</Link></div>
        <div className="searchButton">
          <i className="material-icons">
            search
              </i>
        </div>
      </div>
      <div className="menu-container">
        <Menu className="Menu" />
      </div>
    </div>
  );
}



export default Header;
