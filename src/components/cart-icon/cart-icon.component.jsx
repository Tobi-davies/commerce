import React from "react";

import "./cart-icon.styles.css";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";

const cartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default cartIcon;
