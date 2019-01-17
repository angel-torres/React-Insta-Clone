import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostHeader = (props) => {
    return (
      <div className="post-header">
          <img alt="avatar" className="thumbnail" src={props.thumbnailUrl}/>
          <h2>{props.username}</h2>
      </div>
    )
}

PostHeader.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
}

export default PostHeader;
