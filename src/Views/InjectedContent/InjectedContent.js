import React from 'react';
import './InjectedContent.css';
import { thisExpression } from '@babel/types';

class InjectedContent extends React.Component {

  constructor() {
    super();
    this.state = { counter: 0 }
  }

  render() {
    return (
      <div className="InjectedContent" >
        <div className="card"></div>
        <div className="card">
          {this.state.counter}<br />
          <br />
          <br /><br /><br />
          <button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>+</button>
          <button onClick={() => { this.setState({ counter: this.state.counter - 1 }) }}>-</button>
        </div>
        <div className="card"></div>
      </div>
    );
  }

}

export default InjectedContent;
