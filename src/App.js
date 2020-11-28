import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-sign-up.component';



const App = () => {
// const changeName = () => {
//   setName("Tobenz")
// }

  return (
    <div className="App">
      <Header />
     <Switch>
     <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
     </Switch>
    </div>
  );
}

export default App;
