import React from 'react';
import styled from 'styled-components';


const styledButton = styled.button`
    padding: 10px;
    width: 100px;
    margin: 20px;
    background-color: white;

    &:hover {
        background-color: black;
        color: white;
    }
`;

const logInInput = styled.input`
    margin: 20px;
    width: 200px;
    height: 30px;
    text-align: center;
`;

const logInForm = styled.form`
    border: 2px solid lightgrey;
    width: 500px;
    margin: auto auto;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    align-items: center;
`;

export default {styledButton, logInInput, logInForm};
