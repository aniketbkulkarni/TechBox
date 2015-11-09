var React = require('react');
var Parse = require('parse');

var Keys = require('./keys.js');

// Insert your app's keys here:

Parse.initialize(Keys.appId, Keys.jsKey);

var Main = require('./Main.react.js');

React.render(
  <Main />,
  document.getElementById('app')
);