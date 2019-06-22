import React, { useState, useEffect } from 'react';
import './FullReview.css';
import { useStateValue } from '../../../Controller/state';

function FullReview() {

    var rating, gameReview, pic
    return (
        <div className="FullReview" >
            <div className="middle">
                <div className="InjectedContent" >
                    <div className="superCard">
                        <div className="container">
                            <p id="gameNameParagraph">Game Name:</p>
                            <label id="gameName"></label>
                            <img id="gameImgBox" src={pic}></img>
                            <p id="gameimgParagraph">Image Link: </p>
                            <label id="gameImg"></label>
                            <p id="gameReviewParagraph">Review: </p>
                            <p id="gameReview">{gameReview}</p>
                            <p id="gameRatingParagraph">Rating {rating} </p>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}



export default FullReview;
