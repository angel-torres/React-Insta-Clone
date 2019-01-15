import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';
import Comment from './Comment';
import AddComment from './AddComment'

// const CommentSection = (props) => {
//     return (
//       <div className="comments">
//           {props.comments.map( (comment, i) => {
//               return <Comment username={comment.username} text={comment.text} key={i}/>
//           })}
//           <AddComment postKey={props.postKey} addComment={props.addComment} handleChange={props.handleChange} inputText={props.inputText} />
//       </div>
//     )
// }

// CommentSection.propTypes = {
//     key: PropTypes.string,
//     timeStamp: PropTypes.string,
//     addComment: PropTypes.func,
//     handleChange: PropTypes.func,
//     inputText: PropTypes.string,
//     comments: PropTypes.arrayOf(PropTypes.shape({
//         username: PropTypes.string,
//             text: PropTypes.string,
//     }))
// }


class CommentSection extends React.Component  {
    constructor(props) {
        super();
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
            <div className="comments">
                {this.state.comments.map( (comment, i) => {
                    return <Comment username={comment.username} text={comment.text} key={i}/>
                })}
                <AddComment addComment={this.addComment} handleChange={this.handleChange} inputText={this.inputText} />
            </div>
          )
    }
    
}

{/* <CommentSection postKey={props.post.timestamp} addComment={props.addComment} handleChange={props.handleChange} inputText={props.inputText} comments={props.post.comments}/> */}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
            text: PropTypes.string,
    }))
}

export default CommentSection;