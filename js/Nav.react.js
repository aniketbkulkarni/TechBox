var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


var Nav = React.createClass({

    render: function() {
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
                                    <a href="#" className="btn btn-simple">Discovery</a>
                                    <a href="#" className="btn btn-simple">Favorites</a>
                                    <a href="#" className="btn btn-simple">Login</a>
                               </ul>
                            </div>
                          </div>
                        </nav>   
        );
    }
});

module.exports = Nav;