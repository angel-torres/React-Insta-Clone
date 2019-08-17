import React from 'react';
import PropTypes from 'prop-types';
import {PostStyledHeader, StyledThumbnail} from '../StyledComponents';


const PostHeader = (props) => {
    return (
      <PostStyledHeader className="post-header">
          <StyledThumbnail alt="avatar" className="thumbnail" src={props.thumbnailUrl}/>
          <h2>{props.username}</h2>
      </PostStyledHeader>
    )
}

PostHeader.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
}

export default PostHeader;
