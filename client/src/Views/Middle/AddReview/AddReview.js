import React, { useState, useEffect } from 'react';
import './AddReview.css';
import { useStateValue } from '../../../Model/state';

function AddReview() {

  const [pic, setPic] = useState("https://senaparts.com/wp-content/themes/senaparts/images/placeholder-image.png")
  const [newGameName, setNewGameName] = useState("")
  const [newGameReview, setNewGameReview] = useState("")
  const [newGameRating, setNewgGameRating] = useState("")
  const [newAuthorName, setNewAuthorName] = useState("")


  return (
    <div className="AddReview" >
      <div className="middle">
        <div className="InjectedContent" >
          <div className="superCard">
            <div className="container">
              <p id="gameNameParagraph">Author Name:</p>
              <input type="text" id="authorName" onChange={(e) => {
                console.log(e.target.value)
                setNewAuthorName(e.target.value)
              }}></input>
              <p id="gameNameParagraph">Game Name:</p>
              <input type="text" id="gameName" onChange={(e) => {
                console.log(e.target.value)
                setNewGameName(e.target.value)
              }}></input>
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
              <textarea type="text" id="gameReview" onChange={(e) => {
                console.log(e.target.value)
                setNewGameReview(e.target.value)
              }}></textarea>
              <p id="gameRatingParagraph">Rating (1-5): </p>
              <input type="text" id="gameRating" onChange={(e) => {
                console.log(e.target.value)
                setNewgGameRating(e.target.value)
              }}></input>
              <p hidden="true" id="warningParagraph"></p>
              <img id="gameImgBox" src={pic}></img>
              <input type="button" id="submitReviewbtn" value="Review Ready!" onClick={e => AddReviewToDB(newAuthorName, newGameName, pic, newGameReview, newGameRating)}></input>

            </div>
          </div>
        </div>
      </div>
    </div >
  );
}



export default AddReview;
function AddReviewToDB(authorName, gameName, pic, review, Rating) {

  let objData = { authorName: authorName, gameName: gameName, img: pic, reviewDescription: review, rating: Rating }
  console.log(objData)

  fetch("http://localhost:4000/AddReview", {
    method: 'POST',
    body: JSON.stringify({ objData }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json()
    .then(response => {
      console.log('here is ur response AddReview', response);
    }).catch(error => console.error('Error:', error)))
}