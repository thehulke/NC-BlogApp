(function() {
	angular.module('blogApp')
		.controller('singlePost', function($routeParams) {
      console.log('singlePost');
			this.htmlPath = 'data/posts/html/' + $routeParams.postPath + '.html';

		});
})();
