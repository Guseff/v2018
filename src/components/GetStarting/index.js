import React from 'react';
import classNames from 'classnames';

import ButtonLearn from '../ButtonLearn';

import './style.css';

import img from '../../assets/images/product-tour-hero-2@2x.png';

const STEPS = [
  {
    step: 1,
    title: 'Sign up',
    text: 'Create a FREE Bitsgap account',
  },
  {
    step: 2,
    title: 'Try it',
    text: 'Follow your favorite pairs on any exchange , discover best and worst performing pairs, trade in DEMO mode',
  },
  {
    step: 3,
    title: 'Use it on a daily basis',
    text: 'Connect exchanges and make more profitable trading decisions,',
  }
];

const GetStarting = (props) => (
  <div className='.getting-wrapper'>
    <div className='getting'>
      <div className='getting-info'>
        <div className='getting-title'>
          Getting started is easy: 
        </div>
        <div className='getting-list'>
          {STEPS.map((elem, i) => (
            <div key={i} className='getting-element'>
              <div className='getting-element-title'>
                <div className='getting-element-title-number'>
                  {elem.step}
                </div>
                <div className='getting-element-title-text'>
                  {elem.title}
                </div>
              </div>
              <div className={classNames('getting-element-text',
                                {'getting-element-text--last': (STEPS.length - 1) === i}
                              )}>
                {elem.text}
              </div>
            </div>
          ))}
        </div>
        <div className='getting-button-wrap'>
          <ButtonLearn text='sign up now' />
        </div>
      </div>
      <img alt='' src={img} className='getting-img' />
    </div>
  </div>
);

export default GetStarting; 