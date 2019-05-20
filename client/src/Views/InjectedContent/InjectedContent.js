import React from 'react';
import './InjectedContent.css';
import { thisExpression } from '@babel/types';

function InjectedContent() {
  return (
    <div className="InjectedContent" >
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
  );
}

export default InjectedContent;
