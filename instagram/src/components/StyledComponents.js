import styled from 'styled-components';


export const StyledButton = styled.button`
    padding: 10px;
    width: 100px;
    margin: 20px;
    background-color: white;

    &:hover {
        background-color: black;
        color: white;
    }
`;

export const LogInInput = styled.input`
    margin: 20px;
    width: 200px;
    height: 30px;
    text-align: center;
`;

export const LogInForm = styled.form`
    border: 2px solid lightgrey;
    width: 500px;
    margin: auto auto;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    align-items: center;
`;

export const AddCommentInput = styled.input`
    width: 100%;
    border: none;
    height: 30px;
`;

export const StyledComment = styled.div`
    display: flex;
`;

export const StyledComments = styled.div`
    padding: 10px;
`;

export const PostStyledHeader = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    padding: 10px;
`;

export const StyledThumbnail = styled.img`
    height: 100%; 
    border-radius: 50%;
    padding: 10px;
`;

export const PostStyledContainer = styled.div`
    margin: 0 auto;
    width: 600px;
    border: 1px solid lightgrey;
`;

export const LikesStyledContainer = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
`;

export const LikeStyledIcon = styled.img`
    padding-right: 10px;
`;

export const StyledLlikes = styled.p`
    padding: 0;
    margin: 0;
    font-weight: bold;
`;

export const PostPicture = styled.img`
    width: 100%;
    height: 600px;
`;

export const StyledSearchBar = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    background-color: rgb(255, 255, 255);
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    border-bottom: 2px solid lightgrey;
    margin-bottom: 20px;
`;

export const StyledLeftSearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const RightSearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledInstaLogo = styled.img`
    height: 50px;
    padding: 0 10px 0 0;
`;

export const StyledSearchLogo = styled.img`
    padding: 0 10px;
    width: 30px;
`;

export const StyledSearchInput = styled.input`
    width: 300px;
    height: 40px;
    text-align: center;
    font-size: 20px;
    border: 2px solid lightgrey;
    color: black;
    border-radius: 5px;
`;



