import React from 'react';
import SHOP_DATA from './shop.data'
import { useState } from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection';

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA)

  return(
    <div className='shop-page'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}

export default ShopPage;