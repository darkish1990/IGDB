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
  const selectedReviewCon =
    selectedReviewFromAppState.selectedReviewFromAppState;

  useEffect(() => {
    if (selectedReviewCon) {
      setAuthorNameToLoc(selectedReviewCon.card.authorName);
      setGameNameToLoc(selectedReviewCon.card.gameName);
      setGameImgToLoc(selectedReviewCon.card.img);
      setGameReviewToLoc(selectedReviewCon.card.reviewDescription);
      setGameRatingToLoc(selectedReviewCon.card.rating);
    }
  }, []);

  return (
    <div className="full-review-container">
      <div className="full-review-card-container">
        <div className="full-review-image-container">
          <img
            className="full-review-image"
            src={
              selectedReviewCon ? selectedReviewCon.card.img : gameimgFromLocal
            }
          />
        </div>
        <div className="full-review-title">
          <h3>
            {selectedReviewCon
              ? selectedReviewCon.card.gameName
              : gameNameFromLocal}
          </h3>
        </div>
        <div className="full-review-text">
          {selectedReviewCon
            ? selectedReviewCon.card.reviewDescription
            : gameReviewFromLocal}
        </div>
        <div className="full-review-bottom-container">
          <div className="full-review-author">
            <h5>
              Created By{" "}
              {selectedReviewCon
                ? selectedReviewCon.card.authorName
                : authorNameFromLocal}
            </h5>
          </div>
          <div className="full-review-ratings">
            Rating{" "}
            {selectedReviewCon
              ? selectedReviewCon.card.rating
              : gameRatingFromLocal}
          </div>
        </div>
      </div>
      <Footer path={"/FullReview"} />
    </div>
  );
}

export default FullReview;
