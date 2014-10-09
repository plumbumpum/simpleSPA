requirejs.config({
    baseUrl: '/js',
    urlArgs: 'date=' + (new Date()).getDate(),

    paths: {
    	//libs
    	'page': '/bower/page.js/page',
    	'jquery': '/bower/jquery/dist/jquery.min',
    	//modules
    	'api': 'modules/api'	
    },

    map: {
    	'controllers/authorController': {
    		'api': 'modules/local-api'
    	}
    }
});