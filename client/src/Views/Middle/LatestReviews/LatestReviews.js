import React, { useState, useEffect } from "react";
import "./LatestReviews.css";
import { useStateValue } from "../../../Model/state";
import { Link } from "react-router-dom";
import Footer from "../../Common/Footer/Footer";

function LatestReviews(props) {
  const [cards, setCards] = useState([]);
  const [, dispatch] = useStateValue();

  useEffect(() => {
    fetch("/LatestReviews").then(response =>
      response
        .json()
        .then(response => {
          console.log("here is ur response", response);
          setCards(response);
        })
        .catch(error => console.error("Error:", error))
    );
  }, []);
  return (
    <div className="latest-reviews-container">
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
            <div className="latest-reviews-card-container">
              <div className="latest-reviews-image-container">
                <img className="latest-reviews-image" src={card.img} />
              </div>
              <div className="latest-reviews-title">
                <h3>{card.gameName}</h3>
              </div>
              <div className="latest-reviews-text">
                {card.reviewDescription}
              </div>
              <div className="latest-reviews-author">
                <h5>Created By {card.authorName}</h5>
              </div>
            </div>
          </Link>
        );
      })}
      <Footer path={"/LatestReviews"} />
    </div>
  );
}

export default LatestReviews;
