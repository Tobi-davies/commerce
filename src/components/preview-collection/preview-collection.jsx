import React from 'react';

import './preview-collection.style.css';

const PreviewCollection = ({title, items}) => (
  <div>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items.filter((item, idx) => idx < 4).map((item)=> (
          <div key={item.id}>{item.name}</div>
        ))
      }
    </div>
  </div>
)

export default PreviewCollection;