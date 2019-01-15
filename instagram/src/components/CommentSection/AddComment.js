import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const AddComment = (props) => {
    return (
      <div className="comment">
        <form className="add-comment" onSubmit={()=>{console.log("it works")}}>
          <input className="add-comment"  onChange={props.handleChange} value={props.inputText} type="text" placeholder="Add a comment..."/>
        </form>
      </div>
    )
}

AddComment.propTypes = {
    handleChange: PropTypes.func,
    inputText: PropTypes.string,
}

export default AddComment;