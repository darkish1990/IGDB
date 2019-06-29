import React, { useState, useEffect } from 'react';
import './AddReview.css';
import { useStateValue } from '../../../Model/state';

function AddReview() {

  const [pic, setPic] = useState("https://senaparts.com/wp-content/themes/senaparts/images/placeholder-image.png")


  return (
    <div className="AddReview" >
      <div className="middle">
        <div className="InjectedContent" >
          <div className="superCard">
            <div className="container">
              <p id="gameNameParagraph">Game Name:</p>
              <input type="text" id="gameName"></input>
              <p id="gameimgParagraph">Image Link: </p>
              <input type="text" id="gameImg" onChange={(e) => {
                console.log(e.target.value)
                if (e.target.value) {
                  setPic(e.target.value)
                } else {
                  setPic('https://senaparts.com/wp-content/themes/senaparts/images/placeholder-image.png')
                }
              }}></input>
              <p id="gameReviewParagraph">Review: </p>
              <textarea type="text" id="gameReview"></textarea>
              <p id="gameRatingParagraph">Rating (1-5): </p>
              <input type="text" id="gameRating"></input>
              <p hidden="true" id="warningParagraph"></p>
              <img id="gameImgBox" src={pic}></img>
              <input type="submit" id="submitReviewbtn" value="Review Ready!"></input>

            </div>
          </div>
        </div>
      </div>
    </div >
  );
}



export default AddReview;
