import React from 'react';
import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu" >
        <div className='divButtons'>Steam News</div>
        <div className='divButtons'>Add A Review</div>
        <div className='divButtons'>Latest Reviews</div>
      </div>
    );
  }

}

export default Menu;
