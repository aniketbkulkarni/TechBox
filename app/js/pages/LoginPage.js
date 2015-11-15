'use strict';

import React            from 'react';
import { render }       from 'react-dom';
import Parse            from 'parse';
import ParseReact       from 'parse-react';
import {Link}           from 'react-router';
import {History}        from 'react-router';
import {PropTypes}      from 'react-router';
import {Redirect}       from 'react-router';

import DocumentTitle    from 'react-document-title';

var ParseComponent = ParseReact.Component(React);


const propTypes = {
  currentUser: React.PropTypes.object
};

class LoginPage extends ParseComponent {


  constructor(props) {
    super(props);
    this.state = {
      error1: false,
      email: '',
      pass: ''
    };

    this.handleEmail    = this.handleEmail.bind(this);
    this.handlePass     = this.handlePass.bind(this);
    this.handleSubmit   = this.handleSubmit.bind(this);
  }


  observe(props, state) {

  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePass(event) {
    this.setState({
      pass: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const email = this.state.email
    const pass = this.state.pass

    console.log(this.state.email);
    console.log(this.state.pass);

    Parse.User.logIn(email, pass, {
      success: function(user) {
        // Do stuff after successful login.


        var token = user.getSessionToken();

        Parse.User.become(token).then(function (user) {
            // The current user is now set to user.
            console.log("Success");

            // this.context.router.transitionTo('/');
            window.location.assign("/");

          }, function (error) {
            // The token could not be validated.
          });

      }, error: function(user, error) {
        // The login failed. Check error to see why.

      }
    });

  }

  render() {
    return (
      <DocumentTitle title="Login">
        <div className="wrapper">
                <div className="register-background">
                    <div className="filter-black"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 ">
                                    <div className="register-card">


          <h3 className="title">Welcome</h3>
          <form className="register-form">

            <label>Email</label>
            <input value={this.state.email} onChange={this.handleEmail} type="text" className="form-control" placeholder="Email" />

            <label>Password</label>
            <input value={this.state.pass} onChange={this.handlePass} type="password" className="form-control" placeholder="Password" />

            {this.state.error1 && (<p>Bad login information</p>)}

            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block">Sign In</button>
            <Link to="/register" className="btn btn-primary btn-block">Register</Link>

          </form>
          <div className="forgot">

              <p><a href="#" target="_blank" className="btn btn-simple"><i className="fa fa-twitter"></i></a>
              <a href="#" target="_blank" className="btn btn-simple"><i className="fa fa-facebook"></i></a></p>

          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
      </DocumentTitle>
    );
  }

}

LoginPage.propTypes = propTypes;

export default LoginPage;
