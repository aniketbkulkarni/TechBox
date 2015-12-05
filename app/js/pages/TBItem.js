'use strict';

import React         from 'react';
import Parse         from 'parse';
import ParseReact    from 'parse-react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

var ParseComponent = ParseReact.Component(React);

class TBItem extends ParseComponent {

    constructor(props) {
      super(props);
      this.state = {
        itemAdded: false
      };

      this.isItemAdded = this.isItemAdded.bind(this);
      this.handleAddItem = this.handleAddItem.bind(this);
    }

    observe(props, state) {
    }

    componentDidMount() {
      this.isItemAdded(this.props.ItemId);
    }

    isItemAdded(itemId) {
      var query = new Parse.Query('AddedItemIdToUser');
      query.equalTo("username", Parse.User.current().get("username"));
      query.equalTo("ItemId", itemId);
      query.find(
        {
          success: function() {
            console.log("Item " + itemId + " Is already added to " );
            console.log(Parse.User.current().get("username"));
            this.setState({
              itemAdded: true
            })

          }.bind(this),
          error: function() {
            console.log("Item " + itemId + " Is NOT added to ")
            console.log(Parse.User.current().get("username"));
            this.setState({
              itemAdded: false
            })
          }.bind(this)
        }
      );
    }

    handleAddItem(event){
      event.preventDefault();
      var AddItem = Parse.Object.extend("AddedItemIdToUser");
      var itemToAdd = new AddItem();
      var itemId =this.props.ItemId

      itemToAdd.save({
        ItemId: itemId,
        username: Parse.User.current().get("username")
        }, {
          success: function() {
            console.log(":) Added item to my items!")
          },
          error: function() {
            console.log("could not add item to my items");
          }
      });


    }

    render() {
      return (
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <Link to="/reviews">
            <img src={this.props.image._url} alt=""></img>
            </Link>

            {(this.state.itemAdded == true)?
              <span>Added</span> :
              <button onClick={this.handleAddItem}>Add this to My Items</button>
            }
            <div className="caption">
              <h5>{this.props.objectName}</h5>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      );
    }
}

export default TBItem;
