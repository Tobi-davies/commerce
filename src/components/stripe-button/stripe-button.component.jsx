import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StriptCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I73R8FwU1ktTra1oewqm3qXTny3lpbqKbViydrJgfJyVR3fn1CajWrNJZDKYczo6hIIVzsknWUoLXNNxNQqyt9I00M1qXfLFv";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Davies CROWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StriptCheckoutButton;
