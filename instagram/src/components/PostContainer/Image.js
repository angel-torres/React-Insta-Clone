import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

const Image = (props) => {
    return (
      <div>
          <img alt="post" src={props.image}/>
      </div>
    )
}

Image.propTypes = {
    image: PropTypes.string,
}

export default Image;
