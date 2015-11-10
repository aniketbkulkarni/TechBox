'use strict';

import React         from 'react';
import Parse         from 'parse';
import ParseReact    from 'parse-react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

var ParseComponent = ParseReact.Component(React);

const propTypes = {
  currentUser: React.PropTypes.object
};

class Featured extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
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
}

class RecentlyAdded extends ParseComponent {

    constructor(props) {
      super(props);
    }

    observe(props, state) {
      return {
        items: (new Parse.Query('Items')).ascending('createdAt')
      };
    }

    render() {

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
}

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Home">
        <section className="home-page">

          <Featured />
          <RecentlyAdded />



        </section>
      </DocumentTitle>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;