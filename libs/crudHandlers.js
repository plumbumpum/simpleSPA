var mongoose = require('mongoose'),
	db = require('./mongoose');

module.exports = function(modelName){
	var list,
		get,
		create,
		update,
		remove;

	list = function(req, res, next){
		db.model(modelName).find({}, function(err, data){
			if (err) {
		 		next(err);
		 	}
			res.send(data);
		});
	};

	get = function(req, res, next){
		var id;

		try {
			id = mongoose.Types.ObjectId(req.params.id);
		} catch (e) {
			res.send(400);
		}

		db.model(modelName).find({ _id: id }, function(err, data){
			if (err) {
				next(err);
			}

			if (data) {
				res.send(data);
			} else {
				res.send(404);
			}
		});
	};

	create = function(req, res, next){
		db.model(modelName).create(req.body, function(err, data) {
			if (err) {
				next(err);
			}
			res.send(data);
		});
	};

	update = function(req, res, next){
		var id;

		try {
			id = mongoose.Types.ObjectId(req.params.id);
		} catch (e) {
			res.send(400);
		}

		db.model(modelName).update({ _id: id }, { $set: req.body }, function(err, numberAffected, data){
			if (err) {
				next(err);
			}

			if (numberAffected) {
				res.send(200);
			} else {
				res.send(404);
			}
		});
	};

	remove = function(req, res, next){
		var id;

		try {
			id = mongoose.Types.ObjectId(req.params.id);
		} catch (e) {
			res.send(400);
		}

		db.model(modelName).remove({ _id: id }, function(err, data){
			if (err) {
				next(err);
			}

			res.send(data ? req.params.id : 404)
		});
	};

	return {
		list: list,
		get: get,
		create: create,
		update: update,
		remove: remove
	};
};