import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";

const App = (props) => {
  // const [currentUser, updateCurrentUser] = useState(null);
  // const changeName = () => {
  //   setName("Tobenz")
  // }
  // console.log(currentUser);

  // const unsubscribeFromAuth = null

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // createUserProfileDocument(user);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          // updateCurrentUser({
          //   id: snapShot.id,
          //   ...snapShot.data(),
          // });
          props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

          // console.log(currentUser);
        });
        // console.log(currentUser);
      } else {
        // updateCurrentUser(userAuth);
        props.setCurrentUser(userAuth);
      }

      // console.log(user);
      // console.log(currentUser);
    });

    return () => {
      unsubscribeFromAuth();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);

// export default App;
