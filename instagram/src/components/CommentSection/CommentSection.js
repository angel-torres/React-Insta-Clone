import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';
import Comment from './Comment';
import AddComment from './AddComment'

const CommentSection = (props) => {
    return (
      <div className="comments">
          {props.comments.map( (comment, i) => {
              return <Comment username={comment.username} text={comment.text} key={i}/>
          })}
          <AddComment handleChange={props.handleChange} inputText={props.inputText} />
      </div>
    )
}

CommentSection.propTypes = {
    handleChange: PropTypes.func,
    inputText: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
            text: PropTypes.string,
    }))
}

export default CommentSection;