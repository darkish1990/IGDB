import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Middle from './Middle/Middle';

class App extends React.Component {
  componentDidMount() {
    console.log('app did mount')
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <Middle />
        <Footer />

      </div>
    );
  }

}

export default App;
