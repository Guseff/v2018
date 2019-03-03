import React from 'react';

import './style.css';

const InfoBlock = (data) => (
  <div className="footer-info-block">
    <div className="footer-info-block-title">
      {data.title}
    </div>
    <div>
      {data.children}
    </div>
  </div>
);

export default InfoBlock;