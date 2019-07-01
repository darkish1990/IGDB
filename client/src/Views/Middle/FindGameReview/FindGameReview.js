import React, { useState, useEffect } from "react";
import "./FindGameReview.css";
import { useStateValue } from "../../../Model/state";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import FullReviews from "../../Common/FullReview/FullReview";
import Footer from "../../Common/Footer/Footer";

import SearchBar from "../../Common/SearchBar/SearchBar";

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
            <div className="find-game-review-card-container">
              <div className="find-game-review-image-container">
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
                  <img className="find-game-review-image" src={card.img} />
                </Link>
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
  fetch("http://localhost:4000/FindGameReview", {
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
