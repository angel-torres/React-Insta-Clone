import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = (props) => {
    return (
      <div className="comment">
          <p><strong>{props.username}</strong> {props.text}</p>
      </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
            text: PropTypes.string,
    })
}

Comment.propTypes = {
    addComment: PropTypes.func,
    inputText: PropTypes.string,
    handleChange: PropTypes.func,
};

export default Comment;
