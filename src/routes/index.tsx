import React, { Component, ReactElement } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from 'Main';
import Login from 'containers/auth/login';
import Map from 'containers/map';

const browserHistory = createBrowserHistory();

export default class Routes extends Component {
  render(): ReactElement {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route path={'/'} exact component={Main} />
          <Route path={'/login'} exact component={Login} />
          <Route path={'/map'} exact component={Map} />
        </Switch>
      </Router>
    );
  }
}
