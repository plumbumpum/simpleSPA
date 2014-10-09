var mongoose = require('../libs/mongoose'),
	modelName = 'articles',
	handlers = require('../libs/crudHandlers')(modelName);

module.exports = handlers;