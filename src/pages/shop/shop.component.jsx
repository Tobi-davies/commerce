import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";

// import SHOP_DATA from "./shop.data";
// import { useState } from "react";

// import { createStructuredSelector } from "reselect";
// import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.url}`} component={CollectionsOverview} />
    </div>
  );
};

export default ShopPage;
