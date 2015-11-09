var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Nav = require('./Nav.react.js');
var Recent = require('./RecentlyAdded.react.js');
var Signup = require('./Signup.react.js');
var Register = require('./Register.react.js')
var Featured = require('./Featured.react.js')

// Top Level Component
var Main = React.createClass({
        render: function() {
          var message =
            'Techbox - React is running';

          return (
            <div>
                <Nav />
                <Featured />
                <Recent />
                
            </div>
         );

        }
    });

module.exports = Main;