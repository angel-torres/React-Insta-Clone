import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import './PostContainer.css';
import {LikesStyledContainer, LikeStyledIcon, StyledLlikes} from '../StyledComponents';


// const LikesStyledContainer = styled.div`
//   width: 100px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 10px;
// `;

// const LikeStyledIcon = styled.img`
//   padding-right: 10px;
// `;

// const StyledLlikes = styled.p`
//   padding: 0;
//   margin: 0;
//   font-weight: bold;
// `;


class LikesContainer extends React.Component {
    constructor(props) {
      super();
      this.state = {
        likes: props.likes,
        liked: false,
      }
    }

    addLike = () => {
      if (this.state.liked === false) {
        this.setState({
          likes: this.state.likes + 1,
          liked: true,
        }) 
      } else {
        this.setState({
          likes: this.state.likes - 1,
          liked: false,
        })
      }
    }

    render() {
      return(
      <LikesStyledContainer className="likes-container">
        <div className="like-container-icons">
            <LikeStyledIcon onClick={this.addLike} className="like-icon" alt="like icon" src={(this.state.liked === false) ? "https://img.icons8.com/ios/30/000000/like.png" : "https://img.icons8.com/office/30/000000/hearts.png"} />
            <LikeStyledIcon className="like-icon" alt="comment icon" src="https://img.icons8.com/ios/30/000000/speech-bubble.png"/>
        </div>
        <StyledLlikes className="likes">{this.state.likes} likes</StyledLlikes>
      </LikesStyledContainer>
      )
    }
}


LikesContainer.propTypes = {
  likes: PropTypes.number
}

export default LikesContainer;
