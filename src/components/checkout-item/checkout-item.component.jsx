import React from "react";
import "./checkout-item.styles.css";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  reduceItem,
  addItem,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ item, removeItem, reduceItem, addItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="img" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({

// })

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  // addItem: (item) => dispatch(addItem(item)),
  reduceItem: (item) => dispatch(reduceItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
