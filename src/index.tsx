import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import App from './App';
import Auth from './components/Auth/Auth';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={Auth} />
      <Route exact path="/articles" component={App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
