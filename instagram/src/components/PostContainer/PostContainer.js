import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import Image from './Image';
import LikesContainer from './LikesContainer';

const PostContainer = (props) => {
    return (
        
      <div className="post-container">
          <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl}/>

          <Image image={props.post.imageUrl}/>

          <LikesContainer />

          <CommentSection comments={props.post.comments}/>
      </div>
    )
}

export default PostContainer;
