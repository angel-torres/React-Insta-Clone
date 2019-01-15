import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = (props) => {
    return (
      <div className="comment">
          <h3>{props.username}</h3>
          <p>{props.text}</p>
      </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
            text: PropTypes.string,
    })
}

export default Comment;
