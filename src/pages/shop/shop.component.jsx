import React from 'react';
import SHOP_DATA from './shop.data'
import { useState } from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA)

  return(
    <div className='shop-page'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}

export default ShopPage;