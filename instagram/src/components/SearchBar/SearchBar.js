import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
      <div className="search-bar">
        <div className="left-search-container">
            <img className="insta-logo" src="https://img.icons8.com/ios/30/000000/instagram-new.png"/>
            <h1>Instagram</h1>
        </div>
        <input type="text" placeholder="search"/>
        <div className="right-search-container">
            <img className="search-logo" src="https://img.icons8.com/ios/50/000000/compass.png"/>
            <img className="search-logo" src="https://img.icons8.com/ios/50/000000/like.png" />
            <img className="search-logo" src="https://img.icons8.com/ios/50/000000/gender-neutral-user.png"/>
        </div>
      </div>
    )
}

export default SearchBar;
