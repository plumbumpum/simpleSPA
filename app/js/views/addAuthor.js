define(function (require) {
	var $ = require('jquery'),
	$content = $('#content'),

	bindEvents = function () {
		var controller = require('controllers/authorController');

		$content.children('button').click(function () {
			var authorName = $content.children('input[name="name"]').val(),
			author = {
				name: authorName
			};

			controller.save(author);
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