import styled, { css } from "styled-components";

const buttonStyles = css`
background-color: black;
color: white;
border: none;

&:hover {
  background-color: #357ae8;
  border: none
}
`


const invertedButtonStyles = css`
  background: #fff;
  color: black;
  border: 1px solid black;

  .inverted:hover {
    background: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  .google-sign-in:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const GetButtonStyles = props => {
  if(props.googleSignIn) {
    return googleSignInStyles
  } 
  return props.inverted ? invertedButtonStyles : 
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  .custom-button:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
