'use strict';

import React            from 'react';
import { render }       from 'react-dom'
import Parse            from 'parse';
import ParseReact       from 'parse-react';
import {Link}           from 'react-router';
import {History}        from 'react-router';
import {Redirect}       from 'react-router';

var ParseComponent = ParseReact.Component(React);

class Header extends ParseComponent {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  observe(props, state) {
    var currentUser = Parse.User.current();
    if (currentUser) {
      this.state.loggedIn = true;
    } 
    console.log(currentUser);
  }

  handleLogout(event) {
    event.preventDefault();
    this.setState({
      loggedIn: false
    });

    console.log("handleLogout");

    Parse.User.logOut();
    var currentUser = Parse.User.current(); 
    console.log(currentUser);

    currentUser._logOutWithAll();
    console.log(currentUser);
  }

  render() {

    if (!this.state.loggedIn) {

      return (
          <nav className="navbar navbar-default" role="navigation-demo" id="demo-navbar">
            <div className="container">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand">TechBox</Link>
              </div>
          
              <div className="collapse navbar-collapse" id="navigation-example-2">
                <ul className="nav navbar-nav navbar-right">
                    <Link to="/favorites" className="btn btn-simple">Favorites</Link>
                    <Link to="/login" className="btn btn-simple">Login</Link>
                    <Link to="/register" className="btn btn-simple">Register</Link>
                 </ul>
              </div>
            </div>
          </nav>  
      );
    }

    // todo fix code duplication
    else {
        return (
          <nav className="navbar navbar-default" role="navigation-demo" id="demo-navbar">
            <div className="container">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand">TechBox</Link>
              </div>
          
              <div className="collapse navbar-collapse" id="navigation-example-2">
                <ul className="nav navbar-nav navbar-right">
                    <Link to="/favorites" className="btn btn-simple">Favorites</Link>
                    <button onClick={this.handleLogout} className="btn btn-simple">Logout</button>
                 </ul>
              </div>
            </div>
          </nav>  
      );

    }
  }

}

export default Header;