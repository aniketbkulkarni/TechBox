var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


// Top Level Component
var Favorited = React.createClass({

    mixins: [ParseReact.Mixin],

    observe: function() {

        return {
            items: (new Parse.Query('UserHistory'))
        };
    },

    render: function() {

      return (
        <div>
            <h3>Your Favorites!</h3>

            {this.data.items.map(function(c) {

            return (

                  <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                      <img src={c.image._url} alt=""></img>
                      <div className="caption">
                        <h5>{c.objectName}</h5>
                        <p>...</p>
                      </div>
                    </div>
                  </div>
                )
            })}




        </div>
     );

    }
});

module.exports = Favorited;