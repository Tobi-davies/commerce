import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

import { firestore } from "../../firebase/firebase.utils";
import { useEffect } from "react";
// import { render } from "node-sass";

// import SHOP_DATA from "./shop.data";
// import { useState } from "react";

// import { createStructuredSelector } from "reselect";
// import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ match }) => {
  // unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      console.log(snapshot);
    });
  });

  return (
    <div className="shop-page">
      <Route exact path={`${match.url}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.url}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;

// class ShopPage extends React.Component {
//   unsubscribeFromSnapshot = null;

//   componentDidMount() {
//     const collectionRef = firestore.collection("collections");
//     collectionRef.onSnapshot(async (snapshot) => {
//       console.log(snapshot);
//     });
//   }

//   render() {
//     const { match } = this.props;

//     return (
//       <div className="shop-page">
//         <Route exact path={`${match.url}`} component={CollectionsOverview} />
//         <Route
//           exact
//           path={`${match.url}/:collectionId`}
//           component={CollectionPage}
//         />
//       </div>
//     );
//   }
// }
