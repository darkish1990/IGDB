import './App.css';
import { StateProvider } from '../Model/state';
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';
import Middle from './Middle/Middle';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import FullReview from './Common/FullReview/FullReview';
import LatestReviews from './Middle/LatestReviews/LatestReviews';

function App() {

  const appState = {
    selectedReviewFromAppState: '',
    FindGameReviewSearchBarValue: '',

  };


  const reducer = (state, action) => {
    switch (action.type) {
      case 'selectedReviewFromAppState':
        return {
          ...state,
          selectedReviewFromAppState: action.payload

        };
      case '':
        return {
          ...state,
          count: action.payload
        };
      default:
        return state;
    }
  };


  return (
    <StateProvider appState={appState} reducer={reducer}>
      <Router>
        <div className="App" >
          <Header />
          <Route exact path='/' component={LatestReviews} />
          <Route path='/latestReviews' component={Middle} />
          <Route path='/addReview' component={Middle} />
          <Route path='/findReview' component={Middle} />
          <Route path='/FullReview' component={FullReview}></Route>
          <Footer />

        </div>
      </Router>
    </StateProvider>

  );
}


export default App;
