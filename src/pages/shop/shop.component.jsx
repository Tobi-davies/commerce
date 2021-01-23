import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";
// import { useEffect } from "react";
import { connect } from "react-redux";
// import { updateCollections } from "../../redux/shop/shop.actions";
import { useState } from "react";
import { useEffect } from "react";
// import { render } from "node-sass";

// import SHOP_DATA from "./shop.data";
// import { useState } from "react";

// import { createStructuredSelector } from "reselect";
// import { selectCollections } from "../../redux/shop/shop.selectors";
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
  match,
  isCollectionFetching,
  fetchCollectionsStartAsync,
}) => {
  useEffect(() => {
    fetchCollectionsStartAsync();

    // eslint-disable-next-line
  }, []);
  // const unsubscribeFromSnapshot = null;

  // useEffect(() => {
  //   const collectionRef = firestore.collection("collections");

  //   collectionRef.get().then((snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

  //     console.log(collectionsMap);
  //     updateCollections(collectionsMap);
  //     setLoading(false);
  //   });

  // collectionRef.onSnapshot(async (snapshot) => {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

  //   console.log(collectionsMap);
  //   updateCollections(collectionsMap);
  //   setLoading(false);
  // });

  // return () => {
  //   unsubscribeFromSnapshot();
  // };

  // eslint-disable-next-line
  // }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.url}`}
        render={(props) => (
          <CollectionOverviewWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
      <Route
        exact
        path={`${match.url}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

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
