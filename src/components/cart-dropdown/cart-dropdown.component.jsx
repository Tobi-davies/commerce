import React from "react";

import "./cart-dropdown.styles.css";
import CustomButton from "../custom-button/custom-button.component";

const Cart = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default Cart;
