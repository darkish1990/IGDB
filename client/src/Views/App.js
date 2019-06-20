import './App.css';
import { StateProvider } from '../Controller/state';
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';
import Middle from './Middle/Middle';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {

  const appState = {
    username: '',
    password: '',
    userStatus: false
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeUserStatus':
        return {
          ...state,
          theme: action.payload
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
          <Route path='/' component={Middle} />
          <Route path='/latestReviews' component={Middle} />
          <Route path='/addReview' component={Middle} />
          <Route path='/findReview' component={Middle} />
          <Footer />

        </div>
      </Router>
    </StateProvider>

  );
}


export default App;
