import React, { useState, useEffect } from 'react';
import './FullReview.css';
import { useStateValue } from '../../../Model/state';
import { useLocalState } from '../../../Model/localStorageHook';

function FullReview() {

    const [authorNameFromLocal, setAuthorNameToLoc] = useLocalState('AuthorName');
    const [gameNameFromLocal, setGameNameToLoc] = useLocalState('GameName');
    const [gameimgFromLocal, setGameImgToLoc] = useLocalState('GameImg');
    const [gameReviewFromLocal, setGameReviewToLoc] = useLocalState('GameReview');
    const [gameRatingFromLocal, setGameRatingToLoc] = useLocalState('GameRating');
    const [selectedReviewFromAppState,] = useStateValue();

    useEffect(() => {
        if (selectedReviewFromAppState.selectedReviewFromAppState) {
            setAuthorNameToLoc(selectedReviewFromAppState.selectedReviewFromAppState.card.authorName);
            setGameNameToLoc(selectedReviewFromAppState.selectedReviewFromAppState.card.gameName);
            setGameImgToLoc(selectedReviewFromAppState.selectedReviewFromAppState.card.img);
            setGameReviewToLoc(selectedReviewFromAppState.selectedReviewFromAppState.card.reviewDescription);
            setGameRatingToLoc(selectedReviewFromAppState.selectedReviewFromAppState.card.rating);
        }
    }, [])



    return (
        <div className="FullReview" >
            <div className="middle">
                <div className="InjectedContent" >
                    <div className="superCard">
                        <div className="container">
                            <p id="authorNameParagraph">{selectedReviewFromAppState.selectedReviewFromAppState ?
                                selectedReviewFromAppState.selectedReviewFromAppState.card.authorName : authorNameFromLocal}</p>
                            <p id="gameNameParagraph">{selectedReviewFromAppState.selectedReviewFromAppState ?
                                selectedReviewFromAppState.selectedReviewFromAppState.card.gameName : gameNameFromLocal}</p>
                            <label id="gameName"></label>
                            <img id="gameImgBox" src={selectedReviewFromAppState.selectedReviewFromAppState ?
                                selectedReviewFromAppState.selectedReviewFromAppState.card.img : gameimgFromLocal}></img>
                            <label id="gameImg"></label>
                            <p id="gameReviewParagraph">Review: </p>
                            <p id="gameReview">{selectedReviewFromAppState.selectedReviewFromAppState ?
                                selectedReviewFromAppState.selectedReviewFromAppState.card.reviewDescription : gameReviewFromLocal}</p>
                            <p id="gameRatingParagraph">Rating {selectedReviewFromAppState.selectedReviewFromAppState ?
                                selectedReviewFromAppState.selectedReviewFromAppState.card.rating : gameRatingFromLocal} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}



export default FullReview;
