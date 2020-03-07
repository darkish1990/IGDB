import React, { useState } from "react";
import "./AddReview.css";
import { Link } from "react-router-dom";
import Footer from "../../Common/Footer/Footer";

function AddReview(props) {
  const [pic, setPic] = useState(
    require("../../../Assets/no-photo.jpg")
  );
  const [newGameName, setNewGameName] = useState("");
  const [newGameReview, setNewGameReview] = useState("");
  const [newGameRating, setNewgGameRating] = useState("");
  const [newAuthorName, setNewAuthorName] = useState("");

  return (
    <>
      <div className="add-review-container">
        <div className="add-review-input">
          <div className="input-title">Author Name:</div>
          <input
            type="text"
            id="authorName"
            required
            onChange={e => {
              console.log(e.target.value);
              setNewAuthorName(e.target.value);
            }}
          />
        </div>
        <div className="add-review-input">
          <p className="input-title">Game Name:</p>
          <input
            type="text"
            id="gameName"
            required
            onChange={e => {
              console.log(e.target.value);
              setNewGameName(e.target.value);
            }}
          />
        </div>
        <div className="add-review-input">
          <p className="input-title">Image Link: </p>
          <input
            type="text"
            id="gameImg"
            onChange={e => {
              console.log(e.target.value);
              if (e.target.value) {
                setPic(e.target.value);
              } else {
                setPic(
                  require("../../../Assets/no-photo.jpg")
                );
              }
            }}
          />
        </div>
        <div className="add-review-input">
          <p className="input-title">Review: </p>
          <textarea
            type="text"
            id="gameReview"
            required
            onChange={e => {
              console.log(e.target.value);
              setNewGameReview(e.target.value);
            }}
          />
        </div>
        <div className="add-review-input">
          <p className="input-title">Rating (1-5): </p>
          <input
            type="text"
            id="gameRating"
            required
            onChange={e => {
              console.log(e.target.value);
              setNewgGameRating(e.target.value);
            }}
          />
        </div>
        <div className="add-review-input">
          <p hidden="true" id="warningParagraph" />
          <img id="gameImgBox" src={pic} />
          <Link to={"/LatestReviews"}>
            <input
              type="submit"
              id="submitReviewbtn"
              value="Review Ready!"
              onClick={e =>
                AddReviewToDB(
                  newAuthorName,
                  newGameName,
                  pic,
                  newGameReview,
                  newGameRating
                )
              }
            />
          </Link>
        </div>
      </div>
      <Footer path={"/AddReview"} />
    </>
  );
}

export default AddReview;
function AddReviewToDB(authorName, gameName, pic, review, Rating) {
  let objData = {
    authorName: authorName,
    gameName: gameName,
    img: pic,
    reviewDescription: review,
    rating: Rating
  };
  console.log(objData);

  fetch("http://localhost:4000/Api/AddReview", {
    method: "POST",
    body: JSON.stringify({ objData }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response =>
    response
      .json()
      .then(response => {
        console.log("here is ur response AddReview", response);
      })
      .catch(error => console.error("Error:", error))
  );
}
