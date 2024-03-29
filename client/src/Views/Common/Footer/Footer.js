import React, { useState, useEffect } from "react";
import "./Footer.css";

function Footer(props) {
  useEffect(() => {
    switch (props.path) {
      case "/FullReview":
        return setlocation(true);
      case "/LatestReviews":
        return setlocation(false);
      case "/AddReview":
        return setlocation(false);
      case "/FindGameReview":
        return setlocation(false);
        default:
    }
  });
  const [location, setlocation] = useState(false);

  return (
    <div className={location ? "footer-fixed" : "footer"}>
      <p> Copyrights Roey Liba .not Inked</p>
    </div>
  );
}

export default Footer;
