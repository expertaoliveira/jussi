import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header.component';
import Home from './components/pages/Home';
import { Result } from './components/pages/Search/Search.page';
import './styles/global.style.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/result/:find" component={Result} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
