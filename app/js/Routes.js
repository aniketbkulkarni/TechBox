'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App                         from './App';
import HomePage                    from './pages/HomePage';
import LoginPage                   from './pages/LoginPage';
import RegisterPage                from './pages/RegisterPage';
import FavoritesPage               from './pages/FavoritesPage';
import ReviewsPage                 from './pages/ReviewsPage';

import NotFoundPage                from './pages/NotFoundPage';

export default (
  <Router history={CreateBrowserHistory()}>
    <Route path="/" component={App}>

      <IndexRoute component={HomePage} />

      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/favorites" component={FavoritesPage} />
      <Route path="/reviews" component={ReviewsPage} />

      <Route path="*" component={NotFoundPage} />

    </Route>
  </Router>
);
