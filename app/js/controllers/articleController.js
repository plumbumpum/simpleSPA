define(function (require) {
	var api = require('api'), 
	page = require('page'),
	listView = require('views/list'),
	addView = require('views/add'),

	list = function () {
		api.get('article').done(function (articles) {
			listView.render(articles);
		});
	},

	add = function () {
		addView.render();
	},

	save = function (article) {
		api.save('article', article).done(function () {
			page('/articles');
		});
	};

	return {
		list: list,
		add: add,
		save: save
	}
})