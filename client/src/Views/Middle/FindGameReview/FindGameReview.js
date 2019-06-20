import React from 'react'
import SearchBar from '../../Common/SearchBar/SearchBar'
import './FindGameReview.css'
import { useStateValue } from '../../../Controller/state';



function FindGameReview() {
  return (
    <div className="FindGameReview">
      <div className="middle">
        <div className="InjectedContent">
          <div className="container">
            <SearchBar />
            <a className="card" href="#">
              <h3>This is a card</h3>
              <p class="small">Card description with lots of great facts and interesting details.</p>
              <div class="dimmer" />
              <div class="go-corner" href="#" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindGameReview
