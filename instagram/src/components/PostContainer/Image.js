import React from 'react';
import './PostContainer.css';

const Image = (props) => {
    return (
      <div>
          <img src={props.image}/>
      </div>
    )
}

export default Image;
