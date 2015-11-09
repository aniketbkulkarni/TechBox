var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

// Insert your app's keys here:

var Recent = require('./RecentlyAdded.react.js');

React.render(
	<div id="images">
	     <div className="tim-title">
	        <h2>Images</h2>
	    </div>
	    <br></br>
	    <div className="row">
	        <Recent />
	    </div>
	    <div className="row">
	    
	    </div>
	</div>  
  
);
module.exports = OuterRecent;