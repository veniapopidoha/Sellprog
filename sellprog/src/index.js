import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Holovna from './pages/Holovna';
import Sell from './pages/Sell'
import App from './App'
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import Test from './pages/test'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
