import React from 'react';

import './style.css';

const NoBlock = (props) => (
  <div className="no-block">
    {props.data.map((elem, i) => (
      <div key={i} className="no-block-elem">
        <img alt='' src={elem.img} className="no-block-img" />
        <div className="no-block-title">
          {elem.title}
        </div>
        <div className="no-block-text">
          {elem.text}
        </div>
      </div>
    ))}
  </div>
);

export default NoBlock;