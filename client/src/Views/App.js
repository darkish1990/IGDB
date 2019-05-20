import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Middle from './Middle/Middle';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {


  return (
    <Router>
      <div className="App" >
        <Header />
        <Route path='/' component={Middle} />
        <Route path='/news' component={Middle} />
        <Route path='/latestReviews' component={Middle} />
        <Route path='/addReview' component={Middle} />
        <Route path='/findReview' component={Middle} />
        <Footer />

      </div>
    </Router>
  );
}


export default App;
