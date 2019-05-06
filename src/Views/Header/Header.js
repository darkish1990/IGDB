import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';

class Header extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="topHeader">
          <div className="logo">IGDB</div>
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

}

export default Header;
