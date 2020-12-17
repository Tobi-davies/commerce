import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = info;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setInfo({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
    setInfo({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInfo({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={info.email}
          label="Email"
          handleChange={handleChange}
          required
        />

        <FormInput
          name="passsword"
          type="password"
          value={info.password}
          label="password"
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
