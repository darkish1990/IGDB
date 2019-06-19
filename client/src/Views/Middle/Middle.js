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
        <LatestReviews />
      ); 
    case '/addReview':
      return (
        <AddReview />
      );
    case '/findReview':
      return (
        <FindGameReview />
      );

    default:
      return (
        <div >
        </div >
      );
  }

}




export default Middle;
