import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {PostPicture} from '../StyledComponents';
// import './PostContainer.css';

// const PostPicture = styled.img`
//     width: 100%;
//     height: 600px;
// `;

const Image = (props) => {
    return (
      <div>
          <PostPicture alt="post" src={props.image} className="post-picture"/>
      </div>
    )
}

Image.propTypes = {
    image: PropTypes.string,
}

export default Image;
