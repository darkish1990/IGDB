import React from 'react';
import './Middle.css';
import { networkInterfaces } from 'os';
import LatestReviews from './LatestReviews/LatestReviews';
import AddReview from './AddReview/AddReview';
import FindGameReview from './FindGameReview/FindGameReview';

function Middle({ match }) {
  console.log(match);
  switch (match.path) {


    case '/latestReviews':
      return (
        <div className='middle'>
          <LatestReviews />
        </div>
      ); break;
    case '/addReview':
      return (
        <div className='middle'>
          <AddReview />
        </div>
      ); break;
    case '/findReview':
      return (
        <div className='middle'>
          <FindGameReview />
        </div>
      ); break;

    default:
      return (
        <div className='middle'>
          <LatestReviews />
        </div>
      ); break;
  }

}




export default Middle;

