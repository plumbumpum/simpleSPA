require(['page', 'controllers/articleController', 'controllers/authorController'], function (page, articleController, authorController) {

	page('/', function () {
		console.log('hello!');
	});

	page('/articles', articleController.list);
	page('/articles/add', articleController.add);
	page('/authors', authorController.list);
	page('/authors/add', authorController.add);

	page.start();
});