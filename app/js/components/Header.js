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
      loggedIn: false,
      paid: false,
      shipAdd: "",
      showAccount: false
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handlePay = this.handlePay.bind(this);
    this.toggleShowAccount = this.toggleShowAccount.bind(this);
    this.handleShipAdd = this.handleShipAdd.bind(this);
  }

  observe(props, state) {
    var currentUser = Parse.User.current();
    if (currentUser) {
      this.state.loggedIn = true;
    }
    console.log(currentUser);
  }

  handlePay(event) {
    event.preventDefault();
    this.setState({
      paid: true
    });
  }

  handleShipAdd(event) {
    this.setState({
      shipAdd: event.target.value
    });
  }

  toggleShowAccount(event) {
    this.setState({
      showAccount: !this.state.showAccount
    });
  }

  handleLogout(event) {
    event.preventDefault();
    this.setState({
      loggedIn: false,
      paid: true,
      showAccount: false

    });

    console.log("handleLogout");

    //Parse.User.logOut();
    var currentUser = Parse.User.current();
    console.log(currentUser);

    currentUser._logOutWithAll();
    console.log(currentUser);
  }

  render() {
      return (
        <div>
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

                  {(this.state.loggedIn)?
                  (
                    <ul className="nav navbar-nav navbar-right">
                      <button onClick={this.toggleShowAccount} className="btn btn-simple">My Account</button>
                      <Link to="/favorites" className="btn btn-simple">My Items</Link>

                    </ul>
                  ) : (
                    <ul className="nav navbar-nav navbar-right">
                      <Link to="/login" className="btn btn-simple">Log In</Link>
                      <Link to="/register" className="btn btn-simple">Sign Up</Link>
                      <Link to="/favorites" className="btn btn-simple">My Items</Link>
                    </ul>
                  )}

            </div>
          </div>
        </nav>
        {(this.state.showAccount)?
          (<div className="alert">
                 <div className="container">
                   <label><span style={{color:"gray"}}>{Parse.User.current().get("username")}</span></label>
                   <br></br> <br></br>

                   <label><span style={{color:"gray"}}>Payment Type</span></label>
                   <br></br>
                   {(this.state.paid)? <span style={{color:"blue"}}>Paypal</span>
                   : <button onClick={this.handlePay} className="btn btn-simple">Connect Paypal</button>}

                   <br></br> <br></br>

                   <label><span style={{color:"gray"}}>Shipping Address</span></label>
                   <input value={this.state.shipAdd} onChange={this.handleShipAdd} type="text" className="form-control" placeholder="555 Evergreen Terrace, Springfield, MA 15551, USA" />
                   <br></br> <br></br>
                   <button onClick={this.toggleShowAccount} className="btn btn-simple">Hide My Account</button>
                   <button onClick={this.handleLogout} className="btn btn-simple">Logout</button>
                </div>
          </div>

        ) : (<span></span>)

        }
        <div className="alert alert-warning">
               <div className="container">
                 {(this.state.loggedIn)?
                   ( (this.state.paid)?
                     (
                       <center>
                         You're in! Enjoy your favorite items every month!
                       </center>
                     ) : (
                       <center>
                         Get your favorite items for only $15/month!
                         <button onClick={this.handlePay} className="btn btn-simple">
                           <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/buy-logo-medium.png" alt="Buy now with PayPal" />
                         </button>
                       </center>
                     )
                   ) : (
                     <center>
                       Get your favorite items for only $15/month!
                       <Link to="/login" className="btn btn-simple">
                         Login Now
                       </Link>
                     </center>
                 )}
              </div>
        </div>
        </div>
      );
  }

}

export default Header;
