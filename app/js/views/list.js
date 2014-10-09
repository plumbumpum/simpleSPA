define(function (require) {
	var $ = require('jquery'), 

	$content = $('#content'), 

	render = function (articles) {
		var innerHtml = '<ul>';

		articles.forEach(function (article) {
			innerHtml += '<li>' + article.name + '</li>';
		});

		innerHtml += '</ul>';

		$content.html(innerHtml);
	};

	return {
		render: render
	}
})