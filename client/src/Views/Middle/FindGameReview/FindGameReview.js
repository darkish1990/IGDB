import React from 'react'
import SearchBar from '../../Common/SearchBar/SearchBar'
import './FindGameReview.css'
import { useStateValue } from '../../../Controller/state';

const cards = [{ title: 'yayyy', description: 'some description asjlgflabvjs avjals hvfjlsbadf as jdvalsjhf s adlflaskdbf k' },
{ title: 'yayyy', description: 'some description asjlgflabvjs avjals hvfjlsbadf as jdvalsjhf s adlflaskdbf k' }]


function FindGameReview() {
  return (
    <div className="LatestReviews">
      <div className="middle">
        <div className="InjectedContent">
          <div className="container">
            {cards.map((card, index) => {
              return (
                <a className="card" href="#" key={index}>
                  <h3>{card.title}</h3>
                  <p className="small">{card.description}</p>
                  <div className="dimmer" />
                  <div className="go-corner" href="#" />
                </a>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindGameReview
