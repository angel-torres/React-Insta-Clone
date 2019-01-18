import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import Image from './Image';
import LikesContainer from './LikesContainer';

import {PostStyledContainer} from '../StyledComponents'

const PostContainer = (props) => {
    return (
      <PostStyledContainer className="post-container">
          <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl}/>

          <Image image={props.post.imageUrl}/>

          <LikesContainer likes={props.post.likes}/>

          <CommentSection comments={props.post.comments}/>
      </PostStyledContainer>
    )
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })
};

export default PostContainer;
