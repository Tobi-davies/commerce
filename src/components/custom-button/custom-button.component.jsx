import React from "react";
import "./custom-button.styles.css";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);

export default CustomButton;

{
  /* <button
  className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
    inverted ? "inverted" : ""
  } custom-button`}
  {...otherProps}
>
  {children}
</button>; */
}
