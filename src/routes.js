import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Header from './layout/Header';
import Footer from './layout/Footer';

class Routes extends React.Component {
  state = {
    activeClass: 'top',
    navExpanded: false,
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
    this.handleNavExpand();
    this.setState({isLoggedIn: true});
  };

  handleLogOut = () => {
    this.handleNavExpand();
    this.setState({isLoggedIn: false});
  };

  handleNavExpand = () => {
    this.setState(preState => ({navExpanded: !preState.navExpanded}));
  }

  render () {
    const {isLoggedIn, activeClass, navExpanded} = this.state;
    return (
      <Router>
        <Header
          activeClass={activeClass}
          isLoggedIn={isLoggedIn}
          navExpanded={navExpanded}
          handleLogOut={this.handleLogOut}
          handleNavExpand={this.handleNavExpand}
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
