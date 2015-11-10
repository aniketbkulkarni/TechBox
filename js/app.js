var React = require('react');
var Parse = require('parse');
var Keys = require('./keys.js');
Parse.initialize(Keys.appId, Keys.jsKey);

var Nav = require('./Nav.react.js');

React.render( <Nav/>, document.getElementById('app') );
