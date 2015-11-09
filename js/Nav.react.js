var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


/* Added to nav */
var Featured = require('./Featured.react.js');
var Recent = require('./RecentlyAdded.react.js');
var Register = require('./Register.react.js')
var Login = require('./Login.react.js');

var NavBar = React.createClass({
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
                        <a href="#" className="btn btn-simple" onClick={this.clickFeat} >Featured</a>
                        <a href="#" className="btn btn-simple" onClick={this.clickRecent}>Recently Added</a>  
                        <a href="#" className="btn btn-simple" onClick={this.clickLogin} >Login</a>
                        <a href="#" className="btn btn-simple" onClick={this.clickSignup} >Signup</a>
                     </ul>
                  </div>
                </div>
              </nav>  
        );
    }
});


var Nav = React.createClass({

  getInitialState: function() {
    // Keep track of the current page
    return {currentPage: "feat"};
  },

  clickFeat: function() {
    this.setState({currentPage: "feat"});
    console.log("Yooo")
    forceUpdate(); // remove this later
  },
  clickRecent: function() {
    this.setState({currentPage: "recent"});
    this.props = { yes : "np"};
    forceUpdate();
  },
  clickLogin: function() {
    this.setState({currentPage: "login"});
    forceUpdate();
  },
  clickSignup: function() {
    this.setState({currentPage: "signup"});
    forceUpdate();
  },
  
  render: function() {
      if (this.state.currentPage == "feat") { return (<div><NavBar/><Login/></div>); }
      else if (this.state.currentPage == "recent") { return  (<div><NavBar/><Recent/></div>); }
      else if (this.state.currentPage == "login") { return (<div><NavBar/><Login/></div>); }
      else if (this.state.currentPage == "signup") { return (<div><NavBar/><Register/></div>); }
      return (<div> Hello </div>);
    }
});

module.exports = Nav;