var React = require('react');
var ReactDOM = require('react-dom');
var RubricList = require('./RubricList');
var todoRubricStore = require('../stores/todoRubricStore');
var todoActions = require('../actions/todoActions');

var RubricListContainer = React.createClass({
	getInitialState:function(){
		return{
			rubricList :todoRubricStore.getList(),
			
		}
	},
	componentDidMount : function(){
		

		todoRubricStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function(){
    	todoStore.removeChangeListener(this._onChange);
  	},
	_onChange : function(){
		this.setState({rubricList:todoRubricStore.getList()
		})
	},
	handleAddItem :function(){
		var newItem = ReactDOM.findDOMNode(this.refs.newItem).value;
		todoActions.addItem(newItem);


	},
	handleRemoveItem :function(index){
		
		todoActions.removeItem(index);


	},
	
	
	 render: function() {

	 	
	 	return(
	 		<div>
		 		<h3>Rubrics</h3>


		 		{this.state.rubricList && <RubricList items={this.state.rubricList}  remove={this.handleRemoveItem}/>}
		 		<form>
				  Rubric Name :<br/>
				  <input type="text" ref="newItem" name="name" id="rubricname"/>
  
				</form>


		 			
		 		
			
				<div>Click to add rubric</div><button className="mdl-button mdl-js-button mdl-button--fab button--mini-fab mdl-button--colored" onClick={this.handleAddItem}>
	  				 <i className="material-icons">add</i>
				</button>
				
				
	 		</div>
	 		)
	 }
});
module.exports=RubricListContainer;