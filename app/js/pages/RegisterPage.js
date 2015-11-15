'use strict';

import {Link}           from 'react-router';
import DocumentTitle    from 'react-document-title';
import Parse            from 'parse';
import ParseReact       from 'parse-react';
import React            from 'react';

const propTypes = {
  currentUser: React.PropTypes.object
};

class RegisterPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      lastname: '',
      email: '',
      pass: '',
      pass2: ''
    };

    this.handleNickname  = this.handleNickname.bind(this);
    this.handleEmail      = this.handleEmail.bind(this);
    this.handlePass       = this.handlePass.bind(this);
    this.handlePass2      = this.handlePass2.bind(this);
    this.handleSubmit   = this.handleSubmit.bind(this);
  }

  handleNickname(event) {
    this.setState({
      nickname: event.target.value
    });
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

  handlePass2(event) {
    this.setState({
      pass2: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const email = this.state.email
    const pass = this.state.pass
    const attrs = { nickname: this.state.nickname }
    const options = {
      success: function(user) {
        console.log("Success you have signed up for techbox!")
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
        console.log('not able to log you in:');
        console.log(error);
        // The login failed. Check error to see why.

      }
    }

    //Signup
    Parse.User.signUp(email, pass, attrs, options )

    //login
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
        console.log('not able to log you in:');
        console.log(error);
        // The login failed. Check error to see why.

      }
    });

  }

  render() {
    return (
      <DocumentTitle title="Register">
            <div className="wrapper">
                <div className="register-background">
                    <div className="filter-black"></div>
                        <div className="container">
                            <div className="row">

                              <div className="register-card2">
                                  <h3 className="title">Get Some Tech!</h3>
                                  <form className="register-form">
                                      <label>Name</label>
                                      <input value={this.state.nickname} onChange={this.handleNickname} type="text" className="form-control" placeholder="First Name" />

                                      <label>Email</label>
                                      <input value={this.state.email} onChange={this.handleEmail} type="text" className="form-control" placeholder="Email" />
                                      { (this.state.email == "")? <span style={{color:"purple"}}> email required</span> : <span></span> }<br></br>
                                      <label>Password</label>
                                      <input value={this.state.pass} onChange={this.handlePass} type="password" className="form-control" placeholder="Password" />
                                      <label>Re-Enter Password</label>
                                      <input value={this.state.pass2} onChange={this.handlePass2} type="password" className="form-control" placeholder="Re-Enter Password" />
                                      {(this.state.pass != "")? ( (this.state.pass == this.state.pass2)? <span style={{color:"green"}}>a perfect match! :)</span> : <span style={{color:"purple"}}>passwords do not match  </span> ) : <span></span>}
                                      {/*<label>Address</label>
                                      <input type="text" className="form-control" placeholder="Address" />
                                      */}


                                      {/* Comment
                                      <form action="" method="POST" id="payment-form">
                                        <span class="payment-errors"></span>

                                        <div class="form-row">
                                          <label>
                                            <span>Card Number</span>
                                          </label>
                                          <input type="text" className="form-control" size="20" data-stripe="number"/>
                                        </div>

                                        <div class="form">
                                          <label>
                                            <span>CVC </span>
                                          </label>
                                          <input type="text"  size="4" data-stripe="cvc"/>
                                        </div>

                                        <div class="form-row">
                                          <label>
                                            <span>Expiration (MM/YYYY)</span>
                                          </label>
                                          <input type="text" size="2" data-stripe="exp-month"/>
                                          <span> / </span>
                                          <input type="text" size="4" data-stripe="exp-year"/>
                                        </div>

                                      </form>
                                      */}


                                      {(
                                        (this.state.pass == this.state.pass2)
                                        && (this.state.pass != "" && this.state.email != "")
                                      )?
                                      <button className="btn btn-neutral btn-block"  onClick={this.handleSubmit}> Sign Up! </button>:
                                      <button className="btn btn-neutral btn-block" > Form has Errors </button>}

                                    </form>

                    </div>

                  </div>
                </div>
              </div>
            </div>
      </DocumentTitle>
    );
  }

}

RegisterPage.propTypes = propTypes;

export default RegisterPage;
