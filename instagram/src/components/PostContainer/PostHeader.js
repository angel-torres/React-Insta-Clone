import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './PostContainer.css';

const PostStyledHeader = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    padding: 10px;
`;

const StyledThumbnail = styled.img`
    height: 100%; 
    border-radius: 50%;
    padding: 10px;
`;

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
