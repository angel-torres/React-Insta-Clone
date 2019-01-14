import React from 'react';
import './PostContainer.css';

const PostHeader = (props) => {
    return (
      <div className="post-header">
          <img src={props.thumbnailUrl}/>
          <h2>{props.username}</h2>
      </div>
    )
}

export default PostHeader;
