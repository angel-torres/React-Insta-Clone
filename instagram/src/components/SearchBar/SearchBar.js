import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
      <div className="search-bar">
        <img className="instagram-logo" src="https://img.icons8.com/ios/30/000000/instagram-new.png"/>
        <h1>Instagram</h1>
        <input type="text" placeholder="search"/>
      </div>
    )
}

export default SearchBar;
