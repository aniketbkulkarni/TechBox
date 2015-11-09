var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Signup = React.createClass({
    
    render: function() {
        return (
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
                                            <button className="btn btn-primary btn-block">Register</button>

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
        );
    }
});

module.exports = Signup;