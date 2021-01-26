// import React, { useState } from "react";
// import FormInput from "../form-input/form-input.component";
// import "./sign-in.styles.css";
// import CustomButton from "../custom-button/custom-button.component";
// import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

// const SignIn = () => {
//   const [userInfo, setUserInfo] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const { email, password } = userInfo;

//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//       setInfo({
//         email: "",
//         password: "",
//       });
//     } catch (error) {
//       console.log(error);
//     }
//     // setInfo({
//     //   email: "",
//     //   password: "",
//     // });
//   };

//   const handleChange = (e) => {
//     const { value, name } = e.target;
//     setUserInfo({ [name]: value });
//   };

//   return (
//     <div className="sign-in">
//       <h2>I already have an account</h2>
//       <span>Sign in with your email and Password</span>

//       <form onSubmit={handleSubmit}>
//         <FormInput
//           name="email"
//           type="email"
//           value={userInfo.email}
//           label="Email"
//           handleChange={handleChange}
//           required
//         />

//         <FormInput
//           name="passsword"
//           type="password"
//           value={userInfo.password}
//           label="password"
//           handleChange={handleChange}
//           required
//         />

//         <div className="buttons">
//           <CustomButton type="submit">SIGN IN</CustomButton>
//           <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
//             SIGN IN WITH GOOGLE
//           </CustomButton>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignIn;

import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
