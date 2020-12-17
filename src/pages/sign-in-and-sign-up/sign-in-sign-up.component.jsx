import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import Signup from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.css";

const SignInAndSignUpPage = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <Signup />
  </div>
);

export default SignInAndSignUpPage;
