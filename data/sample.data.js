'use-strict';

var config = require('../config/config');
var wrap = require('co-monk');
var monk = require('monk');
var db = monk(config.mongoURL);
var sampleData = require('./sample.data.json');

module.exports.countDb = function (){
	var Books = wrap(db.get('books'));
	return Books.count();
}
module.exports.removeDb = function (){
	var Books = wrap(db.get('books'));
	Books.remove();
}
module.exports.populateDb = function (){
	var Books = wrap(db.get('books'));
	Books.insert(sampleData); 
}