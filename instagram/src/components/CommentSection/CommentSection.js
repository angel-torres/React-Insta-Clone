import React from 'react';
import './CommentSection.css';
import Comment from './Comment';

const CommentSection = (props) => {
    return (
      <div>
          {props.comments.map( comment => {
              return <Comment username={comment.username} text={comment.text} />
          })}
      </div>
    )
}

export default CommentSection;