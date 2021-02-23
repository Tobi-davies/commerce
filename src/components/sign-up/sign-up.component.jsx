import React, { useState } from "react";
import { connect } from "react-redux";

// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.css";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [signupDetail, updateDetail] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = signupDetail;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      updateDetail({
        password: "",
        confirmPassword: "",
      });
      return;
    }

    if (password.length < 6) {
      alert("passwords is too weak, try another password");
      this.setState({
        password: "",
        confirmPassword: "",
      });
      return;
    }
    signUpStart({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    updateDetail({ ...signupDetail, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Comfirm Password"
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);

// import React from "react";
// import { connect } from "react-redux";

// import FormInput from "../form-input/form-input.component";
// import CustomButton from "../custom-button/custom-button.component";

// // import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
// import { signUpStart } from "../../redux/user/user.actions";

// import "./sign-up.styles.css";

// class SignUp extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       displayName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     };
//   }

//   handleSubmit = async (event) => {
//     event.preventDefault();
//     const { signUpStart } = this.props;
//     const { displayName, email, password, confirmPassword } = this.state;

//     if (password !== confirmPassword) {
//       alert("passwords don't match");
//       this.setState({
//         password: "",
//         confirmPassword: "",
//       });
//       return;
//     }

//     if (password.length < 6) {
//       alert("passwords is too weak, try another password");
//       this.setState({
//         password: "",
//         confirmPassword: "",
//       });
//       return;
//     }

//     signUpStart({ email, password, displayName });

//     // try {
//     //   const { user } = await auth.createUserWithEmailAndPassword(
//     //     email,
//     //     password
//     //   );

//     //   await createUserProfileDocument(user, { displayName });

//     //   this.setState({
//     //     displayName: "",
//     //     email: "",
//     //     password: "",
//     //     confirmPassword: "",
//     //   });
//     // } catch (error) {
//     //   console.error(error);
//     // }
//   };

//   handleChange = (event) => {
//     const { name, value } = event.target;

//     this.setState({ [name]: value });
//   };

//   render() {
//     const { displayName, email, password, confirmPassword } = this.state;
//     return (
//       <div className="sign-up">
//         <h2 className="title">I do not have a account</h2>
//         <span>Sign up with your email and password</span>
//         <form className="sign-up-form" onSubmit={this.handleSubmit}>
//           <FormInput
//             type="text"
//             name="displayName"
//             value={displayName}
//             onChange={this.handleChange}
//             label="Display Name"
//             required
//           />
//           <FormInput
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//             label="Email"
//             required
//           />
//           <FormInput
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//             label="Password"
//             required
//           />
//           <FormInput
//             type="password"
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={this.handleChange}
//             label="Confirm Password"
//             required
//           />
//           <CustomButton type="submit">SIGN UP</CustomButton>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
// });

// export default connect(null, mapDispatchToProps)(SignUp)
