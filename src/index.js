import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Products from './Products';
import ProductInformation from './ProductInformation';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Products} />
        <Route path='/productInformation/:page' component={ProductInformation} />
      </Route>
    </Router>,
  document.getElementById('root')
);
