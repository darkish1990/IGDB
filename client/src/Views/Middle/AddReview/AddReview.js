import React from 'react';
import './AddReview.css';

function AddReview() {

  return (
    <div className="AddReview" >
      <div className="middle">
        <div className="InjectedContent" >
          <div className="superCard">
            <div className="container">
              <p id="gameNameParagraph">Game name:</p>
              <input type="text" id="gameName"></input>
              <p id="gameimgParagraph">Image link: </p>
              <input type="text" id="gameImg"></input>
              <p id="gameReviewParagraph">Review: </p>
              <textarea type="text" id="gameReview"></textarea>
              <input type="submit" id="submitReviewbtn"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default AddReview;
