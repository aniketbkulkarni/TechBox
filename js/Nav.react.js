var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');



/* Added to nav */
var Featured = require('./Featured.react.js');
var Recent = require('./RecentlyAdded.react.js');
var Register = require('./Register.react.js')
var Login = require('./Login.react.js');


var Nav = React.createClass({

  getInitialState: function() {
    // Keep track of the current page
    return {currentPage: "feat"};
  },

  clickFeat: function() {
    this.setState({currentPage: "feat"});
    console.log("featured");
  },
  clickRecent: function() {
    this.setState({currentPage: "recent"});
    console.log("recent");
  },
  clickLogin: function() {
    this.setState({currentPage: "login"});
    console.log("login");
  },
  clickSignup: function() {
    this.setState({currentPage: "signup"});
    console.log("Signup");
  },
  navBar: function() {
    return (<span>Hello There</span>);
  },
  render: function() {
      if (this.state.currentPage == "feat") { return (<div> 1 {this.navBar()}  <Featured/> </div>); }
      else if (this.state.currentPage == "recent") { return  (<div> 2  {this.navBar()}  <Recent/> </div>); }
      else if (this.state.currentPage == "login") { return (<div> 3 {this.navBar()}  <Login/> </div>); }
      else if (this.state.currentPage == "signup") { return (<div> 4 {this.navBar()}  <Register/> </div>); }
      return (<div> Hello </div>);
    }
});

module.exports = Nav;