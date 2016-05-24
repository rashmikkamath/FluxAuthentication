var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./Card');


var RubricList = React.createClass({
	getInitialState : function(){
		return{
		checked:false
		}
	},
	


	
	render: function(){
    
	    var listItems = this.props.items.map(function(item, index){
	      return (
	        <Card key={index} handleChange={this.props.remove} item={item} />
	      )
	    }.bind(this));
	    return (
	      <ul className=" mdl-list">
	        {listItems}
	      </ul>
	    )
  }
});

module.exports = RubricList;
 