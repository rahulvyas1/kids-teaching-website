import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/Home';
import Dashboard from './containers/Dashboard';

class Routes extends React.Component {
  render () {
    return (
      <>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <PrivateRoute path="/dashboard" isAuthenticated={false} >
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </>
    );
  }
}

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        rest.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home"
            }}
          />
        )
      }
    />
  );
}


export default Routes;
