import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './Menu.css';

function Menu() {

  return (
    <div className="menu" >
      <div className='divButtons'><Link to={'/latestReviews'}>Latest Reviews</Link></div>
      <div className='divButtons'><Link to={'/addReview'}>Add A Review</Link></div>
      <div className='divButtons'><Link to={'/findReview'}>Find Review</Link></div>
    </div>
  );
}

export default Menu;
