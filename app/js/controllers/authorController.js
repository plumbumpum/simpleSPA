define(function (require) {
	var api = require('api'),

	addView = require('views/addAuthor'),
	listView = require('views/list'),
	page = require('page'),

	list = function () {
		api.get('author').done(function (authors) {
			listView.render(authors);
		});
	},

	add = function () {
		addView.render();
	},

	save = function (author) {
		api.save('author', author).done(function () {
			page('/authors');
		});
	};

	return {
		list: list,
		add: add,
		save: save
	}
});