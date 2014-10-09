define(function (require) {
	var $ = require('jquery'),
	$content = $('#content'),

	bindEvents = function () {
		var controller = require('controllers/articleController');

		$content.children('button').click(function () {
			var articleName = $content.children('input[name="name"]').val(),
			article = {
				name: articleName
			};

			controller.save(article);
		});
	},
	
	render = function () {
		$content.html(
			'<input name="name" type="text"/>' + 
			'<button>add</button>');

		bindEvents();
	};

	return {
		render: render
	}
})