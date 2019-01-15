import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';
import Comment from './Comment';

const CommentSection = (props) => {
    return (
      <div>
          {props.comments.map( (comment, i) => {
              return <Comment username={comment.username} text={comment.text} key={i}/>
          })}
      </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
            text: PropTypes.string,
    }))
}

export default CommentSection;