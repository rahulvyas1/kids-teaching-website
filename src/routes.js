import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import Home from './containers/Home';
import Dashboard from './containers/Dashboard';

class Routes extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <PrivateRoute path="/dashboard" authToken={false} component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, authToken, ...rest }) => (
  <Route {...rest} render={props => {
    if (!authToken) {
      return <Redirect to={{ pathname: '/home', state: { from: props.location } }} />;
    }

    return <Component {...props} />;
  }} />
);



export default Routes;
