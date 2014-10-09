define(function (require) {
	var $ = require('jquery'), 

	get = function (modelName) {
		var deferred = $.Deferred();

		setTimeout(function () {
			var models = JSON.parse(localStorage.getItem(modelName)) || [];
			deferred.resolve(models);
		}, 500)

		return deferred.promise();
	},

	save = function (modelName, model) {
		var deferred = $.Deferred();

		setTimeout(function () {
			var models = JSON.parse(localStorage.getItem(modelName)) || [];
			
			models.push(model);
			localStorage.setItem(modelName, JSON.stringify(models));

			deferred.resolve(model);
		}, 500);

		return deferred.promise();
	};

	return {
		get: get,
		save: save
	}
});