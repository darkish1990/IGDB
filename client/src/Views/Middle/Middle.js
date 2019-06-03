import React from 'react';
import './Middle.css';
import { networkInterfaces } from 'os';

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
    case '/news':
      return (
        <div className="middle" >
          <div id={match.path} className="InjectedContent" >
            <div className="card">{match.path}</div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
      ); break;
    case '/latestReviews':
      return (
        <div className="middle" >
          <div id={match.path} className="InjectedContent" >
            <div className="card">{match.path}</div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
      ); break;
    case '/addReview':
      return (
        <div className="middle" >
          <div id={match.path} className="InjectedContent" >
            <div className="superCard">{match.path}</div>
          </div>
        </div>
      ); break;
    case '/findReview':
      return (
        <div className="middle" >
          <div id={match.path} className="InjectedContent" >
            <div className="card">{match.path}</div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
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

function mainSwitcher(match) {
}
