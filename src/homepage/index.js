var page = require('page');
var yo = require('yo-yo');

page('/', function(ctx, next){
	var main = document.getElementById('main-container');
	main.innerHTML = '<a href="/singup">Singup</a>'; 
})

page();