import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Header from './layout/Header';
import Footer from './layout/Footer';

class Routes extends React.Component {
  state = {
    activeClass: 'top',
    isLoggedIn: false
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

  handleLogIn = () => {
    this.setState({isLoggedIn: true});
  };

  handleLogOut = () => {
    this.setState({isLoggedIn: false});
  };

  render () {
    const {isLoggedIn, activeClass} = this.state;
    return (
      <Router>
        <Header
          activeClass={ activeClass }
          isLoggedIn={isLoggedIn}
          handleLogOut={this.handleLogOut}
          handleLogIn={this.handleLogIn}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <PrivateRoute path="/dashboard" isLoggedIn={isLoggedIn} component={Dashboard} />
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
