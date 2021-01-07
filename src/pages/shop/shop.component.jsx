import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.component";

// import SHOP_DATA from "./shop.data";
// import { useState } from "react";

// import { createStructuredSelector } from "reselect";
// import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.url}`} component={CollectionsOverview} />
      <Route exact path={`${match.url}`} component={CollectionItem} />
    </div>
  );
};

export default ShopPage;
