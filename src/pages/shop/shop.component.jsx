import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { useEffect } from "react";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
// import { render } from "node-sass";

// import SHOP_DATA from "./shop.data";
// import { useState } from "react";

// import { createStructuredSelector } from "reselect";
// import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ match, updateCollections }) => {
  // const unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

        console.log(collectionsMap);
        updateCollections(collectionsMap);
      }
    );

    return () => {
      unsubscribeFromSnapshot();
    };

    // eslint-disable-next-line
  }, []);

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

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

// class ShopPage extends React.Component {
//   unsubscribeFromSnapshot = null;

//   componentDidMount() {
//     const collectionRef = firestore.collection("collections");
//     this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
//       async (snapshot) => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

//         console.log(collectionsMap);
//       }
//     );
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

// export default ShopPage;
