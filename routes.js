module.exports.setup = function(app, handlers){
	app.get('/api/articles', handlers.articles.list);
	app.get('/api/articles/:id', handlers.articles.get);
	app.post('/api/articles', handlers.articles.create);
	app.put('/api/articles/:id', handlers.articles.update);
	app.delete('/api/articles/:id', handlers.articles.remove);
};