import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductTour from './components/ProductTour';
import OptionBlock from './components/OptionBlock';
import NoBlock from './components/NoBlock';
import GetStarting from './components/GetStarting';

const OPTIONS = [
  {
    reverse: false,
    title: 'Trade',
    text: 'Bitsgap is the easiest way to access all your exchanges at once.',
    img: require('./assets/images/trade-img-1@2x.png'),
    list: [
      {
        ico: require('./assets/images/coin-ic.svg'),
        pic: require('./assets/images/trade-img-1-mobile.png'),
        span: 'Switch between 30+ crypto exchanges',
        text: 'and trade on over 10000 pairs within one simple interface',
        active: true,
      },
      {
        ico: require('./assets/images/star-ic.svg'),
        pic: require('./assets/images/trade-img-2-mobile.png'),
        span: 'All your favorite pairs',
        text: 'with price change at the single glance',
      },
      {
        ico: require('./assets/images/umbrella-ic.svg'),
        pic: require('./assets/images/trade-img-1-mobile.png'),
        span: 'Place smart orders and control your risks',
        text: 'with Stop Loss / Take Profit feature NEW',
      },
    ],
  },
  {
    reverse: true,
    title: 'Analyze',
    text: 'Keep an eye on your portfolio in real-time with always (up-to-date/current/up-to-second) prices.',
    img: require('./assets/images/analyze-img-1.svg'),
    list: [
      {
        ico: require('./assets/images/magic-ic.svg'),
        pic: require('./assets/images/analyze-img-1-mobile.png'),
        span: 'No more manual trade entry and CSV files - ',
        text: 'Bitsgap automatically generates reports of your transactions and balance.',
        active: true,
      },
      {
        ico: require('./assets/images/track-ic.svg'),
        pic: require('./assets/images/analyze-img-2-mobile.png'),
        span: 'Track your Profit/Loss statement',
        text: 'organized and carefree',
      },
      {
        ico: require('./assets/images/magnifier-ic.svg'),
        pic: require('./assets/images/analyze-img-1-mobile.png'),
        span: 'Get a detailed one-page performance overview',
        text: 'for all your coins on all exchanges',
      },
    ],
  },
  {
    reverse: false,
    title: 'Arbitrage',
    text: 'Take advantage of a price difference between two crypto exchanges.',
    img: require('./assets/images/arbitrage-img-1@2x.png'),
    list: [
      {
        ico: require('./assets/images/cursor-ic.svg'),
        pic: require('./assets/images/arbitrage-img-1-mobile.png'),
        span: 'Execute complicated orders',
        text: 'just with one click of the button',
        active: true,
      },
      {
        ico: require('./assets/images/coins-round-ic.svg'),
        pic: require('./assets/images/arbitrage-img-1-mobile.png'),
        span: '',
        text: 'Available for all crypto-to-fiat exchanges',
      },
      {
        ico: require('./assets/images/filter-ic.svg'),
        pic: require('./assets/images/arbitrage-img-1-mobile.png'),
        span: '',
        text: 'Smart filters, settings, and history',
      },
    ],
  },
];

const NO_BLOCK = [
  {
    img: require('./assets/images/shield-ic.svg'),
    title: '0% trading fee',
    text: 'There’s no extra commission for your trading orders.',
  },
  {
    img: require('./assets/images/shield-ic.svg'),
    title: 'No KYC required',
    text: 'There’s no verification procedure, just connect your exchanges and start trading',
  },
  {
    img: require('./assets/images/shield-ic.svg'),
    title: 'Your funds are only yours',
    text: 'Bitsgap doesn\'t have access to your funds, they always remain at the exchange.',
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <ProductTour />
          {OPTIONS.map((elem, i) => (
            <OptionBlock key={i} data={elem} />
          ))}
          <NoBlock data={NO_BLOCK} />
          <GetStarting />
          <Footer />
      </div>
    );
  }
}

export default App;
