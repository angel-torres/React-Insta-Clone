import React from 'react';
import {StyledSearchBar, StyledLeftSearchContainer, StyledInstaLogo, RightSearchContainer, StyledSearchLogo, StyledSearchInput} from '../StyledComponents'

const SearchBar = (props) => {
    return (
      <StyledSearchBar >
        <StyledLeftSearchContainer >
            <StyledInstaLogo className="insta-logo" src="https://img.icons8.com/ios/30/000000/instagram-new.png"/>
            <h1>Instagram</h1>
        </StyledLeftSearchContainer>
        <form onSubmit={props.search}>
            <StyledSearchInput onChange={props.handleChanges} value={props.searchInput} type="text" placeholder="search"/>
        </form>
        <RightSearchContainer >
            <StyledSearchLogo src="https://img.icons8.com/ios/50/000000/compass.png"/>
            <StyledSearchLogo src="https://img.icons8.com/ios/50/000000/like.png" />
            <StyledSearchLogo src="https://img.icons8.com/ios/50/000000/gender-neutral-user.png"/>
        </RightSearchContainer>
      </StyledSearchBar>
    )
}

export default SearchBar;
