import React from 'react';
import './CommentSection.css';

const Comment = (props) => {
    return (
      <div>
          <h3>{props.username}</h3>
          <p>{props.text}</p>
      </div>
    )
}

export default Comment;
