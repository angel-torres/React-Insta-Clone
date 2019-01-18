import React from 'react';
import PropTypes from 'prop-types';
import {StyledComment} from '../StyledComponents'

const Comment = (props) => {
    return (
      <StyledComment className="comment">
          <p><strong>{props.username}</strong> {props.text}</p>
      </StyledComment>
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
