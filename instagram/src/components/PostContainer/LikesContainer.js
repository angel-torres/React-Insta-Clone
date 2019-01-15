import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

const LikesContainer = (props) => {
    return (
      <div className="likes-container">
        <div className="like-container-icons">
            <img className="like-icon" alt="like icon" src="https://img.icons8.com/ios/30/000000/like.png" />
            <img className="like-icon" alt="comment icon" src="https://img.icons8.com/ios/30/000000/speech-bubble.png"/>
        </div>
        <p className="likes">{props.likes} likes</p>
      </div>
    )
}

LikesContainer.propTypes = {
  likes: PropTypes.number
}

export default LikesContainer;
