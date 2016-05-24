var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
//data
var _rubricStore = {
  rubricList: ["R1"]
};
//private setter methods to manipulate data
var addItem = function(item){
  _rubricStore.rubricList.push(item);
};
var removeItem = function(index){
  _rubricStore.rubricList.splice(index, 1);
};

//public getter methods for components to use
var todoRubricStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function(){
    return _rubricStore.rubricList;
  },
});
AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case appConstants.ADD_ITEM:
      addItem(action.data);
      todoRubricStore.emit(CHANGE_EVENT);
      break;
    case appConstants.REMOVE_ITEM:
      removeItem(action.data);
      todoRubricStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});
module.exports=todoRubricStore;


