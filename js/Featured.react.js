var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Featured = React.createClass({
    
    render: function() {
        return (
            <div id="carousel">
                      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                      <div className="carousel slide" data-ride="carousel">

                            
                            <ol className="carousel-indicators">
                              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>
                          
                            
                            <div className="carousel-inner">
                              <div className="item active">
                                <img src="assets/paper_img/nose.jpg" alt="Awesome Image" height="50"/>
                              </div>
                              <div className="item">
                                <img src="assets/paper_img/xbox.jpg" alt="Awesome Image" height="50"/>
                              </div>
                              <div className="item">
                                <img src="assets/paper_img/gph.jpg" alt="Awesome Image" height="50"/>
                              </div>
                            </div>
                          
                            
                            <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                              <span className="fa fa-angle-left"></span>
                            </a>
                            <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                              <span className="fa fa-angle-right"></span>
                            </a>
                          </div>
                      </div>
                  </div>      
        );
    }
});

module.exports = Featured;