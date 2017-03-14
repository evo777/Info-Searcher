var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchResults = React.createClass({
  render: function(){
    if (this.props.searchText != '') {
      var results = <h2 className="page-header">Results for {this.props.searchText}</h2>
    } else {
      var results = '';
    }
    return(
      <div>
        {results}
      </div>
    );
  }
});

module.exports = SearchResults;