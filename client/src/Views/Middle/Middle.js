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
      ); break;
    case '/addReview':
      return (
        <AddReview />
      ); break;
    case '/findReview':
      return (
        <FindGameReview />
      ); break;

    default:
      return (
        <div >
        </div >
      ); break;
  }

}




export default Middle;

