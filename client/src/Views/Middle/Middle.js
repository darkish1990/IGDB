import React from 'react';
import './Middle.css';
import { networkInterfaces } from 'os';
import LatestReviews from './LatestReviews/LatestReviews';
import AddReview from './AddReview/AddReview';
import FindGameReview from './FindGameReview/FindGameReview';

function Middle({ match }) {
  console.log(match);
  switch (match.path) {

    case '/':
      return (
        <div className="middle" >
          <div id={match.path} className="InjectedContent" >
            <div className="card"><h1>Welcome To IGDB</h1></div>
          </div>
        </div>
      ); break;
    case '/latestReviews':
      return (
        <LatestReviews />
      ); break;
    case '/addReview':
      return (
        <AddReview/>
      ); break;
    case '/findReview':
      return (
          <FindGameReview/>
      ); break;

    default:
      return (
        <div className="Middle" >
          <div className="InjectedContent" >
          </div>
        </div>
      ); break;
  }

}




export default Middle;

