import React, { useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./components/checkout/checkout.component";

const App = (props) => {
  useEffect(() => {
    // const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    // createUserProfileDocument(user);
    // if (userAuth) {
    //   const userRef = await createUserProfileDocument(userAuth);
    //   userRef.onSnapshot((snapShot) => {
    //     props.setCurrentUser({
    //       id: snapShot.id,
    //       ...snapShot.data(),
    //     });
    //   });
    // } else {
    //   // updateCurrentUser(userAuth);
    //   props.setCurrentUser(userAuth);
    // }
    // });
    // return () => {
    //   unsubscribeFromAuth();
    // };
    // // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// import React, { useEffect } from "react";
// // import logo from './logo.svg';
// import "./App.css";
// import HomePage from "./pages/homepage/homepage.component";
// import { Route, Switch, Redirect } from "react-router-dom";
// import ShopPage from "./pages/shop/shop.component";
// import Header from "./components/header/header.component";
// import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-sign-up.component";
// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// import { setCurrentUser } from "./redux/user/user.actions";
// import { connect } from "react-redux";
// import { selectCurrentUser } from "./redux/user/user.selectors";
// import { createStructuredSelector } from "reselect";
// import CheckoutPage from "./components/checkout/checkout.component";

// const App = (props) => {
//   // const [currentUser, updateCurrentUser] = useState(null);
//   // const changeName = () => {
//   //   setName("Tobenz")
//   // }
//   // console.log(currentUser);

//   // const unsubscribeFromAuth = null

//   useEffect(() => {
//     const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
//       // createUserProfileDocument(user);

//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);

//         userRef.onSnapshot((snapShot) => {
//           // updateCurrentUser({
//           //   id: snapShot.id,
//           //   ...snapShot.data(),
//           // });
//           props.setCurrentUser({
//             id: snapShot.id,
//             ...snapShot.data(),
//           });

//           // console.log(currentUser);
//         });
//         // console.log(currentUser);
//       } else {
//         // updateCurrentUser(userAuth);
//         props.setCurrentUser(userAuth);
//       }
//     });

//     return () => {
//       unsubscribeFromAuth();
//     };
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <div className="App">
//       <Header />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/shop" component={ShopPage} />
//         <Route exact path="/checkout" component={CheckoutPage} />
//         <Route
//           exact
//           path="/signin"
//           render={() =>
//             props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
//           }
//         />
//       </Switch>
//     </div>
//   );
// };

// // const mapStateToProps = ({ user }) => ({
// //   currentUser: user.currentUser,
// // });

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
