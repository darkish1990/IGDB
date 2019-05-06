import React from './node_modules/react';
import './Header.css';
import Menu from '..Menu/Menu.js'

class Header extends React.Component {
  render() {
    return (
      <div className="Header" >
        <div id="headerTop">
          <img id="igdbIcon" />
          <img id="searchIcon" />
        </div>

        <div id="headerBottom">
          <Menu />
        </div>
      </div>
    );
  }

}

export default Header;
