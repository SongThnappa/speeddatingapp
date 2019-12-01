import React from 'react';
import ReactDom from 'react-dom';
// import { Router } from 'react-router';
// import { createBrowserHistory } from 'history'
// import routes from './routes';
import App from "./components/App"





require('./stylesheets/global.css');




ReactDom.render( <App />,
  document.querySelector('#root')
);
