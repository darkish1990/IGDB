import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar" >
        <input type="search" id="searchTextArea" placeholder="Which Game You're Looking For.." />
      </div>
    );
  }

}

export default SearchBar;
