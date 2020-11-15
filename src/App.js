import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route,Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';



const App = () => {
// const changeName = () => {
//   setName("Tobenz")
// }

  return (
    <div className="App">
     <Switch>
     <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
       {/* <HomePage /> */}
     </Switch>
    </div>
  );
}

export default App;
