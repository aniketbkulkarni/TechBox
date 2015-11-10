var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Reviews = React.createClass({

    mixins: [ParseReact.Mixin],

    observe: function() {

        return {
            items: (new Parse.Query('ItemReview').equalTo("objectName", "GoPro4"))
        };
    },
    
    render: function() {
        var counter = 0;
        return (
            <div className="main">
                <div className="section section-9a9a9a">
                    <div className="container tim-container">
                        <div className="row">
                            <div className="col-xs-6 col-sm-4 col-md-3">
                                <h4>Go Pro Hero 4</h4>
                                <img src="assets/paper_img/gpr.jpg" alt="Rounded Image" className="img-rounded img-responsive" />
                                
                            </div>
                            <div className="col-xs-4 col-sm-3 col-md-2 col-md-offset-0">
                                <h4>Description</h4>
                                <p>This is a description of the item to the left.</p>
                            </div>
                            
                        </div>
                        <br></br>
                        <br></br>
                        {this.data.items.map(function(c) {
                        if (counter == 0){
                            return (
                                <nav className="navbar navbar-ct-danger" role="navigation-demo">
                                  <div className="container">
                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                        <h4>{c.userName}</h4>
                                        <p>{c.stars} Stars!</p>
                                        
                                    </div>
                                    <div className="col-xs-4 col-sm-3 col-md-2 ">
                                        <h4>Review</h4>
                                        <p>{c.review}</p>
                                    </div>
                                  </div>
                                </nav> 
                            )
                        counter = 1;
                        } else {
                            return (
                                <nav className="navbar navbar-ct-default" role="navigation-demo">
                                  <div className="container">
                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                        <h4>{c.userName}</h4>
                                        <p>{c.stars} Stars!</p>
                                        
                                    </div>
                                    <div className="col-xs-4 col-sm-3 col-md-2 ">
                                        <h4>Review</h4>
                                        <p>{c.review}</p>
                                    </div>
                                  </div>
                                </nav> 
                            )
                            counter = 0;
                        }
                        })}
                        

                    </div>
                </div>
            </div>
            
        );
    }
});

module.exports = Reviews;