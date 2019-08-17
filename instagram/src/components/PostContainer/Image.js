import React from 'react';
import PropTypes from 'prop-types';
import {PostPicture} from '../StyledComponents';

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
