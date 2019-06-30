import React from "react";
import "./Middle.css";
import { networkInterfaces } from "os";
import LatestReviews from "./LatestReviews/LatestReviews";
import AddReview from "./AddReview/AddReview";
import FindGameReview from "./FindGameReview/FindGameReview";

function Middle(props) {
  console.log(props.history.match);
  switch (props.history.location.pathname) {
    case "/latestReviews":
      return <LatestReviews />;
    case "/addReview":
      return <AddReview />;
    case "/findReview":
      return <FindGameReview />;

    default:
      return <LatestReviews />;
  }
}

export default Middle;
