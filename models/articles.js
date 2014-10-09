var path = require('path');

module.exports = function (mongoose) {
	var schema;

	schema = new mongoose.Schema({
		name: { type: String, required: true }
	});

	return mongoose.model(path.basename(module.filename, '.js'), schema);
};