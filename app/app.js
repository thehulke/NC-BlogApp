(function() {
	'use strict';
	var blogApp = angular.module('blogApp', ['ngRoute']);

	blogApp.config(function($routeProvider) {
		$routeProvider
			.when('/posts/:start/:search?', {
				templateUrl: 'app/views/posts.html',
				controller: 'postsCtrl as ctrl',
        resolve: {
          postData: function(postsService) {
            return postsService.loadPosts();
          }
        }
			})
      .when('/posts', {
				templateUrl: 'app/views/posts.html',
				controller: 'postsCtrl as ctrl',
        resolve: {
          postData: function(postsService) {
            return postsService.loadPosts();
          }
        }
			})
      .when('/post', {
				templateUrl: 'app/views/singlePost.html',
				controller: 'singlePost as ctrl',
			})
      .when('/post/:postPath',{
        template: `<div ng-include="ctrl.htmlPath"> </div>`,
        controller: 'singlePost as ctrl',
      })
      .when('/admin', {
				templateUrl: 'app/views/adminTemplate.html',
				controller: 'adminCtrl as ctrl'
			})
			.otherwise({
				redirectTo: '/posts'
			});
	});
}());
