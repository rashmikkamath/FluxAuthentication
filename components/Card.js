var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
    getInitialState: function(){
        return{
            checked:false
        }
    },
    

	render : function() {
        
		return(

            <div    ref="assignCard" onClick={this.handleClick}  onMouseOver={this.handleActionCardMOver} onMouseOut={this.handleActionCardMOut} className="joezoo-card mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone mdl-card mdl-shadow--3dp">
                <div className="mdl-card__title ">
                    <h1 className="mdl-card__title-text">{this.props.item}</h1>
                </div>
                 
                    
               
                <div className=" joezoo-card-actions  mdl-card__actions mdl-card--border  "   ref="actionBar">
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" onClick={this.props.handleChange}>
                        X
                    </button>
                    
                </div>
            </div>
        


		)
	}
});
module.exports = Card;