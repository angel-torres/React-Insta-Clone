import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {StyledComments} from '../StyledComponents'
// import './CommentSection.css';
import Comment from './Comment';
import AddComment from './AddComment'

// const StyledComments = styled.div`
//     padding: 10px;
// `;

class CommentSection extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            comments: [...props.comments],
        }
    }

    handleChange = e => {
        this.setState({
          inputText: e.target.value
        })
      }
    
      addComment = (e) => {
        e.preventDefault();
        this.setState({
          comments: [...this.state.comments, {
            username: "Angel",
            text: this.state.inputText,
          }],
          inputText: '',
        })
        
      }

    render() {
        return (
            <StyledComments className="comments">
                {this.state.comments.map( (comment, i) => {
                    return <Comment username={comment.username} text={comment.text} key={i}/>
                })}
                <AddComment addComment={this.addComment} handleChange={this.handleChange} inputText={this.state.inputText} />
            </StyledComments>
          )
    }
    
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
    }))
}

CommentSection.defaultProps = {
    comments: [],
}

export default CommentSection;