var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Nav = require('./Nav.react.js');

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

module.exports = Main;