var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


// Top Level Component
var RecentlyAdded = React.createClass({

    mixins: [ParseReact.Mixin],

    observe: function() {

        return {
            items: (new Parse.Query('Items')).ascending('createdAt')
        };
    },

    render: function() {

      return (
        <div>
            <h3>Recently added items</h3>

            {this.data.items.map(function(c) {

            return (

                  <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                      <img src={c.image1._url} alt=""></img>
                      <div className="caption">
                        <h5>{c.name}</h5>
                        <p>...</p>
                        <p><a href="#" className="btn btn-primary" role="button">Buttonz</a></p>
                      </div>
                    </div>
                  </div>
                )
            })}




        </div>
     );

    }
});

module.exports = RecentlyAdded;