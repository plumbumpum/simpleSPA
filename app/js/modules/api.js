define(function (require) {
	var $ = require('jquery'), 

	map = {
		'article': '/api/articles'
	}, 

	get = function (modelName) {
		var url = map[modelName];
		return $.get(url);
	},

	save = function (modelName, model) {
		var url = map[modelName];

		return $.post(url, model);
	};

	return {
		get: get,
		save: save
	};
});