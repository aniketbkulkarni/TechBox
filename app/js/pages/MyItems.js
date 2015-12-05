'use strict';

import React         from 'react';
import Parse         from 'parse';
import ParseReact    from 'parse-react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';
import TBItem          from './TBItem';

var ParseComponent = ParseReact.Component(React);

const propTypes = {
  currentUser: React.PropTypes.object
};

class FavoritedItems extends ParseComponent {

    constructor(props) {
      super(props);
    }

    observe(props, state) {
      var userHistQuery = new Parse.Query('UserHistory');
      var query = new Parse.Query('AddedItemIdToUser');
      query = query.equalTo("username",Parse.User.current().get("username"));
      query.find({
          success: function(object) {
            var itemIds = [];
            for (var i =0; i < object.length; i++) {
              itemIds.push(object[i].get("ItemId"));
            }
            var q2 = new Parse.Query('Items');
            q2 = q2.equalTo("ItemId","2");
            q2.get("name", { success: function(name) {console.log("name issss", name);} });
          },
          error: function(err) {}
      });

      return {
        items: (userHistQuery)
      };
    }

    render() {
      return (
          <div>
              <h3>Each month we will send you one of these items!!!!</h3>

              <paper-input label="Your name here"></paper-input>
                <paper-card heading="Card Title">
    <div class="card-content">Some content</div>
    <div class="card-actions">
      <paper-button>Some action</paper-button>
    </div>
  </paper-card>
              {(this.data.items.length == 0)?
                <Link to="/" className="btn btn-simple">You haven't selected any items, Add some here!</Link>
                : <span></span> }

              {this.data.items.map(function(c) {
                return (
                  <TBItem ItemId={c.objectId} image={c.image} objectName={c.objectName} description={"Straight Out of box town"}/>
                )}
              )}
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
