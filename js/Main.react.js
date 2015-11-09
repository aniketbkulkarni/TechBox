var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Recent = require('./RecentlyAdded.react.js');
var Signup = require('./Login.react.js');
var Register = require('./Register.react.js')
var Featured = require('./Featured.react.js')

// Router 
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var history = require('react-router/lib/History').history;

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
                                    <a className="btn btn-simple"><Link to="signup"> Sign In</Link></a>
                               </ul>
                            </div>
                          </div>
                        </nav>   
        );
    }
});

// Top Level Component
var Main = React.createClass({
        render: function() {
          var message =
            'Techbox - React is running';

          return (
            <div>
                <Nav />
                
                
            </div>
         );

        }
    });

React.render((
  <Router>
    <Route path="/" component={Main}/>
      <Route path="/signup" component={Signup}/>
      <Route path="register" component={Register}/>
  </Router>
), document.body);

module.exports = Main;