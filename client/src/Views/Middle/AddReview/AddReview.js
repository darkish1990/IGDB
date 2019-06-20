import React from 'react';
import './AddReview.css';
import { useStateValue } from '../../../Controller/state';

function AddReview() {

  return (
    <div className="AddReview" >
      <div className="middle">
        <div className="InjectedContent" >
          <div className="superCard">
            <div className="container">
              <p id="gameNameParagraph">Game Name:</p>
              <input type="text" id="gameName"></input>
              <p id="gameimgParagraph">Image Link: </p>
              <input type="text" id="gameImg"></input>
              <p id="gameReviewParagraph">Review: </p>
              <textarea type="text" id="gameReview"></textarea>
              <p id="gameRatingParagraph">Rating (1-5): </p>
              <input type="text" id="gameRating"></input>
              <p hidden="true" id="warningParagraph"></p>
              <input type="submit" id="submitReviewbtn" value="Review Ready!"></input>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default AddReview;
