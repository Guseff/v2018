import React from 'react';

import './style.css';

import img from '../../assets/images/product-tour-hero@2x.png'; 

const GetStart = () => (
  <div className="product-tour">
    <div className="product-tour-info">
      <div className="product-tour-title">
        Something you'll only find on Bitsgap...
      </div>
      <div className="product-tour-text">
        If you’re looking for unique tools that will 
        give you superpowers in trading and managing 
        your cryptocurrency, you’ve come to the right place!
      </div>
    </div>
    <img alt='' src={img} className="product-tour-img" />
  </div>
);

export default GetStart;