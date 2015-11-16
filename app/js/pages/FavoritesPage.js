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

class NextItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleQueryChange(evt) {
    this.setState({
      query: evt.target.value
    });
  }

  render() {
    return (
      <div id="carousel">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <div className="carousel slide" data-ride="carousel">


                      <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>

                      </ol>


                      <div className="carousel-inner">
                        <div className="item active">
                          <h4>Current</h4>
                          <img src="assets/paper_img/scooter.jpg" alt="Awesome Image"/>
                        </div>
                        <div className="item">
                          <h4>Next</h4>
                          <Link to="/reviews">
                            <img src="assets/paper_img/question.jpg" alt="Awesome Image"/>
                          </Link>
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

class FavoritedItems extends ParseComponent {

    constructor(props) {
      super(props);
    }

    observe(props, state) {
      return {
        items: (new Parse.Query('UserHistory'))
      };
    }

    render() {

          return (


          <div>
              <NextItems />
              <h3>Your Favorites!</h3>

              {this.data.items.map(function(c) {

              return (

                    <div className="col-sm-6 col-md-4">
                      <div className="thumbnail">
                        <Link to="/reviews">
                        <img src={c.image._url} alt=""></img>
                        </Link>
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
}

class FavoritesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleQueryChange(evt) {
    this.setState({
      query: evt.target.value
    });
  }

  render() {
    return (
      <DocumentTitle title="Favorites">

          <FavoritedItems />


      </DocumentTitle>
    );
  }

}

FavoritesPage.propTypes = propTypes;

export default FavoritesPage;
