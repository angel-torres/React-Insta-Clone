import React from 'react';

const authenticate = Login => Posts => props => {
  if (props.username === "angel" && props.password === "hello") {
    return <Posts />;
  }
    return <Login />
}



export default authenticate;
