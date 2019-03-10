import React from 'react';
import classNames from 'classnames';

import ButtonLearn from '../ButtonLearn';

import './style.css';

const OptionBlock = (props) => (
  <div className={classNames('option', {'option--reverse': props.data.reverse})}>
    <div className="option-info">
      <div className="option-title">
        {props.data.title}
      </div>
      <div className="option-text">
        {props.data.text}
      </div>
      <div className="option-list">
        {props.data.list.map((elem, i) => (
          <div key={i} className={classNames('option-list-element',
                            {'option-list-element--active': elem.active}
                          )}>
            <div className='option-element-top'>              
              <img alt='' src={elem.ico} />
              <div>
                <span>{elem.span}</span> {elem.text}
              </div>
            </div>
          </div>
        ))}
        </div>
      <div className="option-button-wrap">
        <ButtonLearn text='learn more' />
      </div>
    </div>
    <img alt='' src={props.data.img} className={classNames('option-img', 
                                                  {'option-img--reverse': props.data.reverse}
                                                )} />
  </div>
);

export default OptionBlock; 