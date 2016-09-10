var page = require('page');
var yo = require('yo-yo');
var title = require('title');
var template = require('./template');
var empty = require('empty-element');

page('/', function(ctx, next){
	title('Platzigram - Singin');
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
})

page();