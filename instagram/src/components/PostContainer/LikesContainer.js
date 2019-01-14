import React from 'react';
import './PostContainer.css';

const LikesContainer = (props) => {
    return (
      <div className="likes-container">
        <div className="like-container-icons">
            <img src="https://img.icons8.com/ios/50/000000/compass.png"/>
            <img src="https://img.icons8.com/ios/50/000000/like.png" />
        </div>
        <p className="likes">400 likes</p>
      </div>
    )
}

export default LikesContainer;
