var mongoose = require('mongoose'),
	fs = require('fs'),
	path = require('path'),
	async = require('async'),
	config = require('./config'),
	db,
	models,
	model,
	init;

mongoose.connect(config.get('mongoose:uri'));
db = mongoose.connection;

db.on('error', function (err) {
	console.log('error db connection');
});

db.once('open', function callback () {
	console.log('db connected');
});

models = {};

init = function (modelsDirectory, callback) {
	var schemaList = fs.readdirSync(modelsDirectory);

	async.each(schemaList, function (item, cb) {
		var modelName = path.basename(item, '.js');
		models[modelName] = require(path.join(modelsDirectory, modelName))(mongoose);
		cb();
	}, callback);
};

model = function (modelName) {
	var name = modelName.toLowerCase();
	if (typeof models[name] == 'undefined'){
		throw 'Model "' + name + '" is not exist';
	}
	return models[name];
}

module.exports.init = init;
module.exports.model = model;