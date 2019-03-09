import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductTour from './components/ProductTour';
import OptionBlock from './components/OptionBlock';

const OPTIONS = [
  {
    reverse: false,
    title: 'Trade',
    text: 'Bitsgap is the easiest way to access all your exchanges at once.',
    img: require('./assets/images/trade-img-1@2x.png'),
    list: [
      {
        ico: require('./assets/images/coin-ic.svg'),
        span: 'Switch between 30+ crypto exchanges',
        text: 'and trade on over 10000 pairs within one simple interface',
        active: true,
      },
      {
        ico: require('./assets/images/star-ic.svg'),
        span: 'All your favorite pairs',
        text: 'with price change at the single glance',
      },
      {
        ico: require('./assets/images/umbrella-ic.svg'),
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
        span: 'No more manual trade entry and CSV files - ',
        text: 'Bitsgap automatically generates reports of your transactions and balance.',
        active: true,
      },
      {
        ico: require('./assets/images/track-ic.svg'),
        span: 'Track your Profit/Loss statement',
        text: 'organized and carefree',
      },
      {
        ico: require('./assets/images/magnifier-ic.svg'),
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
        span: 'Execute complicated orders',
        text: 'just with one click of the button',
        active: true,
      },
      {
        ico: require('./assets/images/coins-round-ic.svg'),
        span: '',
        text: 'Available for all crypto-to-fiat exchanges',
      },
      {
        ico: require('./assets/images/filter-ic.svg'),
        span: '',
        text: 'Smart filters, settings, and history',
      },
    ],
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
          <Footer />
      </div>
    );
  }
}

export default App;
