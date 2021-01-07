import React from "react";
import SHOP_DATA from "./shop.data";
import { useState } from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
