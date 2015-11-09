var React = require('react');
var Parse = require('parse');
var Keys = require('./keys.js');

// Router 
/*var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var history = require('react-router/lib/History').history;
*/
var Nav = require('./Nav.react.js');


// Insert your app's keys here:
Parse.initialize(Keys.appId, Keys.jsKey);


React.render( 
  <Nav/>
  ,
  document.getElementById('app')
);
