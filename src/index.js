import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'


ReactDOM.render(
  <div><App name="Fizza" lastName="Shabbir" age={23}/></div>,
    document.getElementById('root')
  );
 /*
 ReactDOM.render(
  React.createElement('div',null,React.createElement('span',null,"Hello in span create element")),
  This is equivalent to jsx given below
  <div>
  <span>
  Hello in span create element
  </span>
  </div>
    document.getElementById('root')
  );
   */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();