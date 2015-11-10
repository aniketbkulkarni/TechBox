var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Nav = require('./Nav.react.js');
var Recent = require('./RecentlyAdded.react.js');
var Signup = require('./Signup.react.js');
var Register = require('./Register.react.js');
var Featured = require('./Featured.react.js');
var Reviews = require('./Reviews.react.js');
var Favorite = require('./Favorites.react.js');
var Favorited = require('./Favorited.react.js')

// Top Level Component
var Main = React.createClass({
        render: function() {
          var message =
            'Techbox - React is running';

          return (
            <div>
                <Nav />
                <Favorite />
                <Favorited />
                
            </div>
         );

        }
    });

module.exports = Main;