var app,
	express = require('express'),
	path = require('path'),
	winston = require('winston'),
	routes = require('./routes'),
	config = require('./libs/config'),
	db = require('./libs/mongoose'),
	handlers,
	run;

app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use('/', express.static(path.join(__dirname, './app')));
app.use('/bower', express.static(path.join(__dirname, './bower_components')));

app.use(function(err, req, res, next){
	console.log(err.name);
	if (err.name == "ValidationError"){
		res.send(400, err);
	} else {
		next(err);
	}
});

app.use(function(err, req, res, next){
	res.send(500, err);
});

handlers = { 
	articles: require('./handlers/articles') 
};

run = function(){
	routes.setup(app, handlers);
	
	db.init(path.join(__dirname, 'models'), function(err, data){
		var port = config.get('port');

		winston.info('All models are initialized');

		app.listen(port, function(){
			winston.info('App running on port: ' + port);
		});
	});
};

if (module.parent){
	module.exports.run = run;
} else {
	run();
}