import React from 'react';
import './FindGameReview.css';
import SearchBar from '../../Common/SearchBar/SearchBar';

function FindGameReview() {

  return (
    <div className="FindGameReview" >
      <div className="InjectedContent" >
        <div className="container">
          <SearchBar />
          <a class="card" href="#">
            <h3>This is a card</h3>
            <p class="small">Card description with lots of great facts and interesting details.</p>
            <div class="dimmer"></div>
            <div class="go-corner" href="#">
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}



export default FindGameReview;
