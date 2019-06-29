import React, { useState, useEffect } from 'react';
import './FullReview.css';
import { useStateValue } from '../../../Model/state';

function FullReview() {

    const [selectedReviewFromLatest,] = useStateValue();

    return (
        <div className="FullReview" >
            <div className="middle">
                <div className="InjectedContent" >
                    <div className="superCard">
                        <div className="container">
                            <p id="gameNameParagraph">{selectedReviewFromLatest.selectedReviewFromLatest.card.gameName}</p>
                            <label id="gameName"></label>
                            <img id="gameImgBox" src={selectedReviewFromLatest.selectedReviewFromLatest.card.img}></img>
                            <label id="gameImg"></label>
                            <p id="gameReviewParagraph">Review: </p>
                            <p id="gameReview">{selectedReviewFromLatest.selectedReviewFromLatest.card.reviewDecription}</p>
                            <p id="gameRatingParagraph">Rating {selectedReviewFromLatest.selectedReviewFromLatest.card.rating} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}



export default FullReview;
