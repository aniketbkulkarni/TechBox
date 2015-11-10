'use strict';

import React from 'react';

import {Link}           from 'react-router';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
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
              <a className="navbar-brand" href="">TechBox</a>
            </div>
        
            <div className="collapse navbar-collapse" id="navigation-example-2">
              <ul className="nav navbar-nav navbar-right">
                  <a href="#" className="btn btn-simple">Featured</a>
                  <Link to="/search">Back to Home</Link>
                  <a href="#" className="btn btn-simple">Recently Added</a>  
                  <a href="#" className="btn btn-simple">Login</a>
                  <a href="#" className="btn btn-simple">Signup</a>
               </ul>
            </div>
          </div>
        </nav>  
    );
  }

}

export default Header;