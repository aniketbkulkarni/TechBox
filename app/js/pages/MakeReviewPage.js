'use strict';

import React            from 'react';
import {Link}           from 'react-router';
import DocumentTitle    from 'react-document-title';

const propTypes = {
  currentUser: React.PropTypes.object
};

class MakeReview extends React.Component {

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
      <DocumentTitle title="Register">
            <div className="wrapper">
                <div className="register-background"> 
                    <div className="filter-black"></div>
                        <div className="container">
                            <div className="row">
                                
                              <div className="register-card2">
                                  <h3 className="title">What did you think?</h3>
                                  <form className="register-form">
                                      <label>Review it!</label>
                                      <input type="text" className="form-control" placeholder="First Name" />

                                      <div className="dropdown">
                                          
                                            <button className="btn dropdown-toggle btn btn-neutral" type="button" id="dropdownMenu1" data-toggle="dropdown">
                                          
                                              Stars! 
                                          
                                              <span className="caret"></span>
                                          
                                            </button>
                                          
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                          
                                              <li role="presentation"><a role="menuitem" tabindex="-1" href="#">1 Star</a></li>
                                          
                                              <li role="presentation"><a role="menuitem" tabindex="-1" href="#">2 Stars</a></li>
                                          
                                              <li role="presentation"><a role="menuitem" tabindex="-1" href="#">3 Stars</a></li>
                                          
                                              <li role="presentation"><a role="menuitem" tabindex="-1" href="#">4 Stars</a></li>

                                              <li role="presentation"><a role="menuitem" tabindex="-1" href="#">5 Stars</a></li>
                                          
                                            </ul>
                                          
                                      </div>

                                      <Link to = "/reviews" button className="btn btn-neutral btn-block">Submit</Link>
                                      <Link to = "/reviews" button className="btn btn-neutral btn-block">Cancel</Link>

                                    </form>
                                        
                    </div>
                                
                  </div>
                </div>     
              </div>
            </div>   
      </DocumentTitle>
    );
  }

}

MakeReview.propTypes = propTypes;

export default MakeReview;