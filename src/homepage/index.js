var page = require('page');
var yo = require('yo-yo');
var title = require('title');
var template = require('./template');
var empty = require('empty-element');

page('/', function(ctx, next){
	title('Platzigram - Home Page');
	var main = document.getElementById('main-container');
	var pictures = [
		{
			user: {
				username: 'ronny',
				avatar: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/13882413_10210206439176043_3723183845605473911_n.jpg?oh=67736ea6bc97a3c64fc266246f46cbd0&oe=587DAEB5'
			},
			url: 'office.jpg',
			likes: 0,
			liked: false,
			createdAt: new Date()
		},
		{
			user: {
				username: 'ronny',
				avatar: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/13882413_10210206439176043_3723183845605473911_n.jpg?oh=67736ea6bc97a3c64fc266246f46cbd0&oe=587DAEB5'
			},
			url: 'office.jpg',
			likes: 1,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate() - 10)
		}
	];
	empty(main).appendChild(template(pictures));
})

page();