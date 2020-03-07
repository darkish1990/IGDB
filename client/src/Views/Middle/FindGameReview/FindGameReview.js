import React, { useState } from "react";
import "./FindGameReview.css";
import { useStateValue } from "../../../Model/state";
import { Link } from "react-router-dom";
import Footer from "../../Common/Footer/Footer";

function FindGameReview(props) {
  const [, dispatch] = useStateValue();

  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  return (
    <>
      <div className="find-game-review-container">
        <div className="find-game-review-search-bar">
          <input
            type="search"
            id="searchTextArea"
            placeholder="Which Game ?"
            onKeyUp={e => setSearchValue(e.target.value)}
          />
          <i
            className="material-icons"
            onClick={e => SearchClicked(searchValue, setCards, cards)}
          >
            search
          </i>
        </div>
        {cards.map((card, index) => {
          return (
            <Link
              to={"/FullReview"}
              className="card"
              key={index}
              onClick={() => {
                dispatch({
                  type: "selectedReviewFromAppState",
                  payload: { card }
                });
              }}
            >
              <div className="find-game-review-card-container">
                <div className="find-game-review-image-container">
                  <img className="find-game-review-image" src={card.img} />
                </div>
                <div className="find-game-review-title">
                  <h3>{card.gameName}</h3>
                </div>
                <div className="find-game-review-text">
                  {card.reviewDescription}
                </div>
                <div className="find-game-review-author">
                  <h5>Created By {card.authorName}</h5>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer path={"/FindGameReview"} />
    </>
  );
}

export default FindGameReview;
function SearchClicked(value, settingCards, cards) {
  console.log(value);
  fetch("/Api/FindGameReview", {
    method: "POST",
    body: JSON.stringify({ gameName: value }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response =>
    response
      .json()
      .then(response => {
        console.dir(cards);
        console.log("here is ur response", response);
        settingCards(response);
        console.dir(cards);
      })
      .catch(error => console.error("Error:", error))
  );
}
