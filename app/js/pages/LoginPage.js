'use strict';

import React            from 'react';
import {Link}           from 'react-router';
import {Redirect}       from 'react-router';

import DocumentTitle    from 'react-document-title';


const propTypes = {
  currentUser: React.PropTypes.object
};

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleQueryChange(evt) {
    this.setState({
      query: evt.target.value
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
                                            <input type="text" className="form-control" placeholder="Email" />

                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Password" />
                                            <button className="btn btn-primary btn-block">Sign In</button>
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