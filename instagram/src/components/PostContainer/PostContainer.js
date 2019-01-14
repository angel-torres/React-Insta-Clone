import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import Image from './Image';

const PostContainer = (props) => {
    return (
        
      <div>
          <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl}/>

          <Image image={props.post.imageUrl}/>

          <CommentSection comments={props.post.comments}/>
      </div>
    )
}

export default PostContainer;
