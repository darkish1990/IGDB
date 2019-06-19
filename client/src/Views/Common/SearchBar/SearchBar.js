import React from 'react';
import './SearchBar.css';

function SearchBar() {

  return (
    <div className="SearchBar" >
      <input type="search" id="searchTextArea" placeholder="Which Game ?" />
      <i className="material-icons">
        search
      </i>
    </div>
  );
}



export default SearchBar;
