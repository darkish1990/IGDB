import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {

  return (
    <div className="menu" >
      <NavLink to={'/latestReviews'} className='divButtons' activeClassName={"divButtonsRed"}><div >Latest Reviews</div></NavLink>
      <NavLink to={'/addReview'} className='divButtons' activeClassName={"divButtonsRed"} ><div >Add A Review</div></NavLink >
      <NavLink to={'/findReview'} className='divButtons' activeClassName={"divButtonsRed"}><div >Find Review</div></NavLink>
    </div >
  );
}

export default Menu;
