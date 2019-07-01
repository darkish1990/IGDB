import React, { useEffect } from "react";
import "./FullReview.css";
import { useStateValue } from "../../../Model/state";
import { useLocalState } from "../../../Model/localStorageHook";
import Footer from "../Footer/Footer";

function FullReview(props) {
  const [authorNameFromLocal, setAuthorNameToLoc] = useLocalState("AuthorName");
  const [gameNameFromLocal, setGameNameToLoc] = useLocalState("GameName");
  const [gameimgFromLocal, setGameImgToLoc] = useLocalState("GameImg");
  const [gameReviewFromLocal, setGameReviewToLoc] = useLocalState("GameReview");
  const [gameRatingFromLocal, setGameRatingToLoc] = useLocalState("GameRating");
  const [selectedReviewFromAppState] = useStateValue();

  useEffect(() => {
    if (selectedReviewFromAppState.selectedReviewFromAppState) {
      setAuthorNameToLoc(
        selectedReviewFromAppState.selectedReviewFromAppState.card.authorName
      );
      setGameNameToLoc(
        selectedReviewFromAppState.selectedReviewFromAppState.card.gameName
      );
      setGameImgToLoc(
        selectedReviewFromAppState.selectedReviewFromAppState.card.img
      );
      setGameReviewToLoc(
        selectedReviewFromAppState.selectedReviewFromAppState.card
          .reviewDescription
      );
      setGameRatingToLoc(
        selectedReviewFromAppState.selectedReviewFromAppState.card.rating
      );
    }
  }, []);

  return (
    <div className="full-review-container">
      <div className="full-review-card-container">
        <div className="full-review-image-container">
          <img
            className="full-review-image"
            src={
              selectedReviewFromAppState.selectedReviewFromAppState
                ? selectedReviewFromAppState.selectedReviewFromAppState.card.img
                : gameimgFromLocal
            }
          />
        </div>
        <div className="full-review-title">
          <h3>
            {selectedReviewFromAppState.selectedReviewFromAppState
              ? selectedReviewFromAppState.selectedReviewFromAppState.card
                  .gameName
              : gameNameFromLocal}
          </h3>
        </div>
        <div className="full-review-text">
          {selectedReviewFromAppState.selectedReviewFromAppState
            ? selectedReviewFromAppState.selectedReviewFromAppState.card
                .reviewDescription
            : gameReviewFromLocal}
        </div>
        <div className="full-review-bottom-container">
          <div className="full-review-author">
            <h5>
              Created By{" "}
              {selectedReviewFromAppState.selectedReviewFromAppState
                ? selectedReviewFromAppState.selectedReviewFromAppState.card
                    .authorName
                : authorNameFromLocal}
            </h5>
          </div>
          <div className="full-review-ratings">
            Rating{" "}
            {selectedReviewFromAppState.selectedReviewFromAppState
              ? selectedReviewFromAppState.selectedReviewFromAppState.card
                  .rating
              : gameRatingFromLocal}
          </div>
        </div>
      </div>
      <Footer path={"/FullReview"} />
    </div>
  );
}

export default FullReview;
