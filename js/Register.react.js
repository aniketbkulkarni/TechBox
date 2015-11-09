var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Register = React.createClass({
    
    render: function() {
        return (
            <div className="wrapper">
                <div className="register-background"> 
                    <div className="filter-black"></div>
                        <div className="container">
                            <div className="row">
                                
                                    <div className="register-card2">
                                        <h3 className="title">Get Some Tech!</h3>
                                        <form className="register-form">
                                            <label>First Name</label>
                                            <input type="text" className="form-control" placeholder="First Name" />

                                            <label>Last Name</label>
                                            <input type="text" className="form-control" placeholder="Last Name" />

                                            <label>Email</label>
                                            <input type="text" className="form-control" placeholder="Email" />

                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Password" />
                                            <label>Re-Enter Password</label>
                                            <input type="password" className="form-control" placeholder="Re-Enter Password" />

                                            <label>Address</label>
                                            <input type="text" className="form-control" placeholder="Address" />



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



                                            <button className="btn btn-primary btn-block">Sign Up!</button>

                                        </form>
                                        
                                    </div>
                                
                            </div>
                        </div>     
                </div>
            </div>      
        );
    }
});

module.exports = Register;