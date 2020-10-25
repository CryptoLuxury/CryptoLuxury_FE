import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// //Redux
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

