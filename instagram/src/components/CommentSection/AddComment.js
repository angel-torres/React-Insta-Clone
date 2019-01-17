import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './CommentSection.css';

const AddCommentInput = styled.input`
  width: 100%;
  border: none;
  height: 30px;
`;

const AddComment = (props) => {
    return (
      <div className="comment">
        <form name={props.postKey} className="add-comment" onSubmit={props.addComment}>
          <AddCommentInput className="add-comment"  onChange={props.handleChange} value={props.inputText} type="text" placeholder="Add a comment..."/>
        </form>
      </div>
    )
}

AddComment.propTypes = {
    key: PropTypes.string,
    timeStamp: PropTypes.string,
    addComment: PropTypes.func,
    handleChange: PropTypes.func,
    inputText: PropTypes.string,
}

export default AddComment;