var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

// Top Level Component
var Main = React.createClass({
        render: function() {
          var message =
            'Techbox - React is running';

          return (
            <div>
                <p>{message}</p>
            </div>
         );

        }
    });

module.exports = Main;