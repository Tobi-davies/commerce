import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, location, toggleCartHidden }) => {
  console.log(location);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
