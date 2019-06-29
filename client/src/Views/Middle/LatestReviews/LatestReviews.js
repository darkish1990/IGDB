import React, { useState, useEffect } from 'react'
import './LatestReviews.css'
import { useStateValue } from '../../../Model/state';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import FullReviews from '../../Common/FullReview/FullReview';

function LatestReviews() {
  const [cards, setCards] = useState([])
  const [, dispatch] = useStateValue();


  useEffect(() => {
    fetch("http://localhost:4000/LatestReviews").then(response => response.json()
      .then(response => {
        console.log('here is ur response', response);
        setCards(response);
      }).catch(error => console.error('Error:', error)))
  }, [])
  return (
    <div className="LatestReviews">
      <div className="middle">
        <div className="InjectedContent">
          <div className="container">
            {cards.map((card, index) => {
              return (
                <Link to={'/FullReview'} className="card" key={index} onClick={() => {
                  dispatch({
                    type: 'selectedReviewFromLatest',
                    payload: { card }
                  })
                }}>
                  <div className="titleContainer">
                    <img className='gamePic' src={card.img}></img>
                    <h3>{card.gameName}</h3>
                  </div>
                  <p className="small">{card.reviewDecription}</p>
                  <div className="dimmer" />
                  <div className="go-corner" href="#" />
                </Link>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestReviews
