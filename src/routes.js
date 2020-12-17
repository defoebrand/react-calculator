import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import App from './components/App';
import Quote from './components/Quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/App" component={App} />
      <Route path="/Quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
