import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './Menu.css';

function Menu() {

  return (
    <div className="menu" >
      <Link to={'/latestReviews'} className='divButtons'><div >Latest Reviews</div></Link>
      <Link to={'/addReview'} className='divButtons'><div >Add A Review</div></Link >
      <Link to={'/findReview'} className='divButtons'><div >Find Review</div></Link>
    </div >
  );
}

export default Menu;
