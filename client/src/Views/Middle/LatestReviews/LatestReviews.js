import React, { useState, useEffect } from 'react'
import './LatestReviews.css'
import { useStateValue } from '../../../Controller/state';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import FullReviews from '../../Common/FullReview/FullReview';

function LatestReviews() {
  const [cards, setCards] = useState()

  useEffect(() => {
    fetch("http://localhost:4000/LatestReviews").then(response => response.json()
      .then(response => {
        console.dir(cards);

        console.log('here is ur response', response);

        setCards(response);
        console.dir(cards);
        if (response) {
          return (
            <div className="LatestReviews">
              <div className="middle">
                <div className="InjectedContent">
                  <div className="container">
                    {response.map((card, index) => {
                      return (
                        <Link to={'/FullReview'} className="card" key={index}>
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
        else {
          return (
            <div className="LatestReviews">
              <div className="middle">
                <div className="InjectedContent">
                  <div className="container">

                  </div>
                </div>
              </div>
            </div>
          )
        }
      }).catch(error => console.error('Error:', error)))


  }, [])
  return (
    <div className="LatestReviews">
      <div className="middle">
        <div className="InjectedContent">
          <div className="container">

          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestReviews
