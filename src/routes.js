import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import LocalStorageService from './localStorageService';

import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Header from './layout/Header';
import Footer from './layout/Footer';

class Routes extends React.Component {
  state = {
    activeClass: 'top'
  }
  componentDidMount(){
    window.addEventListener('scroll', () => {
       let activeClass = 'top';
       console.log(window.scrollY);
       if(window.scrollY > 50){
           activeClass = 'normal';
       }
       this.setState({ activeClass });
    });
  }

  render () {
    return (
      <Router>
        <Header activeClass={ this.state.activeClass } />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <PrivateRoute path="/dashboard" isLoggedIn={LocalStorageService.getState('isLoggedIn')} component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route {...rest} render={props => {
    if (!isLoggedIn) {
      return <Redirect to='/home' />;
    }

    return <Component {...props} />;
  }} />
);



export default Routes;
